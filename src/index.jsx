import React from 'react';
import styled from 'styled-components';
import { Content, Typing } from './Components';

const Chatbox = ({ className, message, send, leave,fontSize }) => {
  return (
    <div className={className}>
      <Content message={message} />
      <Typing leave={leave} send={send} fontSize={fontSize} />
    </div>
  );
};
export default styled(Chatbox)`
  height: ${props => (props.height?props.height+'px':'100%')};
  width:${props=>(props.width?props.width+'px':'100%')};
  font-size:${props=>(props.fontSize?props.fontSize+'px':'16px')};
  display: flex;
  flex-direction: column;
`;
