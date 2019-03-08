import React, { useRef } from 'react';
import './index.css';
const FakeForm = ({ message, setMessage }) => {
  const formRef = useRef(null);
  const onSubmit = e => {
    e.preventDefault();
    const val = {
      who: formRef.current.who.value,
      sex: formRef.current.sex.value,
      nickname: formRef.current.nickname.value,
      text: formRef.current.text.value
    };
    console.log('[Fake Form] ', val);
    setMessage([...message, val]);
  };
  return (
    <div id="form-wrapper">
      <h3>Test Form</h3>
      <form id="fake" ref={formRef} onSubmit={onSubmit}>
        <input
          name="who"
          placeholder="others"
          defaultValue="other"
          type="text"
        />
        <input name="sex" placeholder="girl" defaultValue="girl" type="text" />
        <input
          name="nickname"
          placeholder="nickname"
          defaultValue="Albee"
          type="text"
        />
        <input
          name="text"
          placeholder="message"
          defaultValue="你好啊！"
          type="text"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default FakeForm;
