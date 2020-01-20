import React from 'react';
import ReactDOM from 'react-dom';

class bandi {
  constructor() {
    this.name = 'Duo Kasparaitis'
    this.members = 'Duo'
  }

  rock() {
    console.log('jou', this.members)
  }
}

const GetThings = ({name}) => {

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
  const duo = new bandi()
  duo.rock()
  return (
    <div>
      <h1>Duo Kasparaitis</h1>
      <GetThings name="Zarathustra" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))