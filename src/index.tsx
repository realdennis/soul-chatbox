import * as React from 'react';
import styled from 'styled-components';
import { Content, Typing } from './Components';
import { ChatboxProps } from './type';

const Chatbox: React.FC<ChatboxProps> = ({
  className,
  userInfo,
  messages,
  onSend,
  onLeave
}) => {
  return (
    <div className={className}>
      <Content messages={messages} />
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
