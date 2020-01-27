import React, { useState, useEffect } from 'react';
import Message from './components/Message'
import Notification from './components/Notification' 
import Footer from './components/Footer'
import messageService from './services/messages'

const GetThings = ({ name }) => {
  const getDate = () => new Date().getFullYear()

  return (
    <div>
      <p>
        You are {name}, and it's {getDate()}
      </p>
    </div>
  )
}

const App = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [errorNotification, setErrorNotification] = useState(null) 
  
  useEffect(() => {
    messageService
      .getAll()
      .then(initialMessages => {
        setMessages(initialMessages)
      })
  }, [])


  const messagerows = () => messages.map(message =>
    <Message 
      key={message.id}
      message={message}
    />
  )

  const addMessage = (event) => {
    event.preventDefault()
    const messageObject = {
      id: messages.length + 1,      
      name: 'Not me',
      content: newMessage,
      date: new Date().toISOString()
    }
    
    messageService
      .create(messageObject)
      .then(returnedMessage => {
        setMessages(messages.concat(returnedMessage))
        setNewMessage('')
      })
      .catch(error => {
        setErrorNotification(
          `Error posting message '${messageObject.content}'` 
        )
        setTimeout(() => {
          setErrorNotification(null)
        }, 5000)
      })
  }

  const handleMessageChange = (event) => {
    console.log(event.target.value)
    setNewMessage(event.target.value)
  }

  return (
    <div>
      <h1>Duo Kasparaitis</h1>

      <GetThings name="Zarathustra" />
      <h2>Messages</h2>
      <ul>
        {messagerows()}
      </ul>
      <form onSubmit={addMessage}>
        <input 
          value={newMessage} 
          onChange={handleMessageChange}
        />
        <button type="submit">Send</button> 
      </form>
      <Notification notification={errorNotification} />
      <Footer />
    </div>
  )
}

export default App