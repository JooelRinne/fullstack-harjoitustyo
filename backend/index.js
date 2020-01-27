const express = require('express')
const app = express()

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

app.delete('/messages/:id', (req, res) => {
  const id = Number(req.params.id)
  messages = messages.filter(message => message.id !== id)

  res.status(204).end()
})
const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)