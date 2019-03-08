import React, { useState } from "react";
import ReactDOM from "react-dom";
import Chatbox from "../../src/index";
import FakeForm from "./FakeForm";
import "./styles.css";
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
        send={val => setMessage([...message, val])}
        leave={val => setMessage([])}
        message={message}
        fontSize={14}
      />
      <FakeForm message={message} setMessage={setMessage} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
