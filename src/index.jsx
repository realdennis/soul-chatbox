import React from 'react';
import styled from 'styled-components';
import { Content, Typing } from './Components';

const Chatbox = ({ className, userInfo, message, onSend, onLeave }) => {
  return (
    <div className={className}>
      <Content message={message} />
      <Typing userInfo={userInfo} onSend={onSend} onLeave={onLeave} />
    </div>
  );
};
export default styled(Chatbox)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
