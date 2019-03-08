# soul-chatbox

React Chatbox component

[CodeSandbox demo](https://codesandbox.io/s/5zxx9mwkyn)
![Imgur](https://i.imgur.com/bppTOAs.jpg)

### Just a component

```jsx
<Chatbox
  message={[]}
  send = {/*send button callback*/}
  leave = {/*leave button callback*/}
  userInfo = {{nickname:'<String>',sex:'boy||girl'}}
  height={/*<Number> ex 400 => 400px  default=100%*/}
  width={/*<Number> same as above   default=100%*/}
  fontSize={/*<Number>* default=16px/}
 />
```

### Message Structure

```javascript
const mes = {
  who: 'you' || 'me',
  sex: 'boy' || 'girl',
  nickname: '<String>',
  text: '<String>'
};
```

### Usage

```jsx
// ./App.jsx
import Chatbox from 'soul-chatbox';
const userInfo = {
  nickname: 'Dennis',
  sex: 'boy'
};
export default () => {
  const [message, setMessage] = useState([]);
  const onSend = mes => {
    //do something like socket.emit(mes)
    setMessage(...message, mes);
  };
  const onLeave = () => alert('leave');
  return (
    <>
      <Chatbox
        message={message}
        onSend={onSend}
        onLeave={onLeave}
        userInfo={userInfo}
        height={400}
        fontSize={14}
      />
    </>
  );
};
```
