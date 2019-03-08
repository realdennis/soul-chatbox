import React from 'react';
import styled from 'styled-components';
const Typing = ({ className, send, leave }) => {
  const onsubmit = e => {
    const message = e.currentTarget.message.value;
    e.currentTarget.message.value = '';
    e.preventDefault();
    message.length > 0 &&
      send({
        text: message,
        who: 'me'
      });
  };
  return (
    <form onSubmit={onsubmit} className={className}>
      <div className="btn" onClick={leave}>
        <span role="img" aria-label="Leave">
          🚫
        </span>
      </div>
      <input
        name="message"
        type="text"
        placeholder="請輸入訊息..."
        autoComplete="off"
        maxLength="100"
      />
      <div
        className="btn"
        onClick={e => {
          e.currentTarget.parentElement.dispatchEvent(new Event('submit'));
        }}
      >
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
  height: ${props => (props.fontSize ? 3 * props.fontSize + 'px' : '50px')};
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
  }
`;
