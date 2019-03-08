import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Message } from './Components';
import { scrollToBottom, checkHasBottom } from './Lib';

const Content = ({ className, message }) => {
  const ref = useRef(null);
  useEffect(() => {
    checkHasBottom(ref.current) && scrollToBottom(ref.current);
    /* */
  });
  return (
    <div className={className}>
      <div ref={ref} className="box">
        {message.map((m, index) => (
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
  background-color: #dfe6e9;
  div.box {
    max-height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling:touch;
  }
`;
