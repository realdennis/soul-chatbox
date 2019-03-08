# soul-chatbox

React Chatbox component

[CodeSandbox demo](https://codesandbox.io/s/5zxx9mwkyn)
![Imgur](https://i.imgur.com/bppTOAs.jpg)

### Just a component

```jsx
<Chatbox
  message={[]}
  onSend = {/*send button callback*/}
  onLeave = {/*leave button callback*/}
  userInfo = {{nickname:'<String>',sex:'boy||girl'}}
  height={/*<Number> ex 400 => 400px  default=100%*/}
  width={/*<Number> same as above   default=100%*/}
  fontSize={/*<Number>* default=16px/}
 />
```

### Message Structure

```javascript
const mes = {
  who: 'me' || 'you',
  sex: 'boy' || 'girl' ||'unknown',
  nickname: '<String>',
  text: '<String>'
};
```

### Usage

```jsx
// ./App.jsx
import Chatbox from 'soul-chatbox';
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
        userInfo={{
          nickname: 'Dennis',
          sex: 'boy'
        }}
        height={400}
        fontSize={14}
      />
      {/* userInfo 將決定onSend拿到的mes的nickname與sex */}
    </>
  );
};
```
