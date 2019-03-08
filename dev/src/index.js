import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Chatbox from '../../src/index';
import FakeForm from './FakeForm';
import './styles.css';
/*
message structure is 
{
  who:'you'||'me',
  sex:'boy'||'girl',
  nickname:<String>,
  text:<String>
}

 */
const App = () => {
  const [message, setMessage] = useState([]);
  return (
    <div className="App">
      <Chatbox
        onSend={val => {
          console.log('[Typing From] ', val);
          setMessage([...message, val]);
        }}
        onLeave={() => setMessage([])}
        message={message}
        userInfo={{ nickname: 'Dennis', sex: 'boy' }}
        fontSize={14}
      />
      <FakeForm message={message} setMessage={setMessage} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
