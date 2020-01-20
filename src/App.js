import React, { useState } from 'react';
import Message from './components/Message'

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

const App = (props) => {
  const [messages, setMessages] = useState(props.messages)
  const [newMessage, setNewMessage] = useState('')

  const messagerows = () => messages.map(message =>
    <Message 
      key={message.id}
      message={message}
    />
  )

  const addMessage = (event) => {
    event.preventDefault()
    const messageObject = {
      name: 'Not me',
      content: newMessage,
      date: new Date().toISOString(),
      important: true,
      id: messages.length + 1,
    }
    
    setMessages(messages.concat(messageObject))
    setNewMessage('')
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
    </div>
  )
}

export default App