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
    <div className='wrapper'>
    {/* use wrapper style to wrap background-color */}
      <Chatbox
        message={message}
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
