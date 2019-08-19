import * as React from 'react';
import styled from 'styled-components';
import { typingProps } from '../type';
const { useRef } = React;
const Typing = ({
  className,
  onSend,
  onLeave,
  userInfo = { nickname: 'anonymous', sex: 'unknown' }
}) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nickname, sex } = userInfo;
    const form = FormRef.current;
    const message = form.message.value;
    form.message.value = '';
    message.length > 0 &&
      onSend({
        who: 'me',
        sex,
        nickname,
        text: message
      });
  };
  const FormRef = useRef(null);
  return (
    <form ref={FormRef} onSubmit={onSubmit} className={className}>
      <div className="btn" onClick={onLeave}>
        <span role="img" aria-label="Leave">
          🚫
        </span>
      </div>
      <input
        name="message"
        type="text"
        placeholder="請輸入訊息..."
        autoComplete="off"
        maxLength={100}
      />
      <div className="btn" onClick={onSubmit}>
        <span role="img" aria-label="Send">
          👉
        </span>
      </div>
    </form>
  );
};
export default styled(Typing)`
  flex-shrink: 0;
  background-color: rgb(240, 240, 240);
  height: 45px;
  display: flex;
  align-items: center;
  .btn {
    background: none;
    outline: none;
    flex-shrink: 0;
    font-size: 20px;
    width: 40px;
    padding: 0 5px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
  input {
    height: 80%;
    border-radius: 10px;
    padding-left: 10px;
    width: 100%;
    border: none;
    outline: none;
    background-color: white;
    font-size: 16px;
  }
` as React.FC<typingProps>;
