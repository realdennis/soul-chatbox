import * as React from 'react';
import styled from 'styled-components';
import { Message } from './Components';
import { scrollToBottom, checkHasBottom } from './Lib';
import { message } from '../../type';
const { useEffect, useRef } = React;
interface ContentProps {
  className?: string;
  messages: message[];
}
const Content: React.FC<ContentProps> = ({ className, messages }) => {
  const ref = useRef(null);
  useEffect(() => {
    checkHasBottom(ref.current) && scrollToBottom(ref.current);
    /* */
  });
  return (
    <div className={className}>
      <div ref={ref} className="box">
        {messages.map((m, index) => (
          <Message
            key={index}
            text={m.text}
            sex={m.sex}
            who={m.who}
            nickname={m.nickname}
          />
        ))}
      </div>
    </div>
  );
};
export default styled(Content)`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  /*background-color: #dfe6e9;*/
  align-items: center;
  div.box {
    background-color: rgba(244, 244, 244, 0.4);
    padding: 5px;
    padding-top: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 90%;
    max-width: 680px;
    max-height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`;
