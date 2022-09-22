import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

/*function App() {
  const userName = 'world'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Message name={userName} id = {1}/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;

const Message = ({name, id}) => {
  return(
    <div>
      <h1 className="Mes">
        Hello, {name}!
      </h1>
    </div>
    )
}*/

function App() {

  const [messageList, setMessageList] = useState([
    { text: '', author: '' },
    { text: '', author: '' },
    { text: '', author: '' }
  ])
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })

  const RobotMessage = 'Сообщение принято'

  useEffect = (() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { text: RobotMessage, author: 'robot' }])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className='App'>
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      <div className="messageList">
        {
          messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} />)
        }
      </div>
    </div>
  );
}



export default App;

const Form = ({ data, setData, setMessage }) => {

  const { text, author } = data

  const submitForm = (e) => {
    e.preventDefault()
    if (text.length > 0) {
      setMessage(pervstate => [...pervstate, { text, author }])
    }
    setData(
      {
        text: '',
        author: ''
      }
    )
  }

  return (
    <form onSubmit={submitForm}>
      <input placeholder='Имя' value={text} onChange={(e) =>
        setData(pervstate => ({ ...pervstate, text: e.target.value })
        )
      } />

      <input placeholder='Текст' value={author} onChange={(e) =>
        setData(pervstate => ({ ...pervstate, text: e.target.value })
        )
      } />
      <button type='submit'>Отправить</button>
    </form>

  )
}



const Message = ({ RobotMessage, id }) => {

  

  return (
    <div>
      <h1 className="Mes">
        Hello, {RobotMessage}!
      </h1>
    </div>
  )
}