import React from 'react'

const Message = ({ message }) => {
  return (
    <li>
      <p>{message.name}</p>
      <p>{message.content}</p>
    </li>
  )
}

export default Message