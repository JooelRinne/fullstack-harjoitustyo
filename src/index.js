import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const messages = [
  {
    id: 1,
    name: 'Not me',
    content: 'Great music',
    date: '2020-01-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    name: 'Visitor',
    content: 'This is shit',
    date: '2020-01-10T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    name: 'Fsfsfs',
    content: 'Terrible',
    date: '2020-01-10T19:20:14.298Z',
    important: true
  }
]

ReactDOM.render(<App messages={messages}/>, document.getElementById('root'))