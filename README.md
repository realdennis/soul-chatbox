# soul-chatbox

React Chatbox component

![Imgur](https://i.imgur.com/b6MMe8M.png)
<br/>
[Component demo](https://codesandbox.io/s/5zxx9mwkyn)
<br/>
[Full App demo](https://codesandbox.io/s/5k2oj426nx)
<br/>

### Just a component

```jsx
<Chatbox
  messages={[]}
  onSend = {/*send button callback*/}
  onLeave = {/*leave button callback*/}
  userInfo = {{nickname:'<String>',sex:'boy||girl'}}
 />
```

### Message Structure

```javascript
const message = {
  who: 'me' || 'you' || 'system',
  sex: 'boy' || 'girl' || 'unknown',
  nickname: '<String>',
  text: '<String>'
};
```

### Usage

```jsx
// ./App.jsx
import Chatbox from 'soul-chatbox';
export default () => {
  const [messages, setMessages] = useState([]);
  const onSend = mes => {
    //do something like socket.emit(mes)
    setMessages([...messages, mes]);
  };
  const onLeave = () => alert('leave');
  return (
    <div className="wrapper">
      {/* use wrapper style to wrap background-color */}
      <Chatbox
        messages={messages}
        onSend={onSend}
        onLeave={onLeave}
        userInfo={{
          nickname: 'Dennis',
          sex: 'boy'
        }}
      />
      {/* userInfo 將決定onSend拿到的mes的nickname與sex */}
    </div>
  );
};
```
