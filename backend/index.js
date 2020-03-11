const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

let messages = [
  {
    "id": 1,
    "name": "Not me",
    "content": "Great music",
    "date": "2020-01-10T17: 30: 31.098Z",
  },
  {
    "id": 2,
    "name": "Visitor",
    "content": "This is shit",
    "date": "2020-01-10T18: 39: 34.091Z",
  },
  {
    "id": 3,
    "name": "Fsfsfs",
    "content": "Terrible",
    "date": "2020-01-10T19: 20: 14.298Z",
  }
]

const generateId = () => {
  const maxId = messages.length > 0
    ? Math.max(...messages.map(message => message.id))
    : 0
  
  return maxId + 1
}

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

app.get('/messages', (req, res) => {
  res.json(messages)
})

app.get('/messages/:id', (req, res) => {
  const id = Number(req.params.id)
  const message = messages.find(message => message.id === id)
  if (message) {
    res.json(message)
  } else {
    res.status(404).end()
  }
  res.json(message)
})

app.post('/messages', (req, res) => {
  const body = req.body

  if (body.content === undefined) {
    return res.status(400).json({
      error: 'Content missing'
    })
  }

  const message = {
    id: generateId(),
    name: body.name,
    content: body.content,   
    date: new Date()
  }

  messages = messages.concat(message)

  res.json(message)
})

app.delete('/messages/:id', (req, res) => {
  const id = Number(req.params.id)
  messages = messages.filter(message => message.id !== id)

  res.status(204).end()
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})