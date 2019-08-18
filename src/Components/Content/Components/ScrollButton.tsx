import * as React from 'react';
import styled from 'styled-components';
import { scrollToBottom } from '../Lib';
const Scroll = ({ className }) => {
  const Click = (e: React.MouseEvent) => {
    scrollToBottom(e.currentTarget.parentElement.parentElement);
  };
  return (
    <div className={className}>
      <span role="img" aria-label="down" onClick={Click}>
        ⬇️
      </span>
    </div>
  );
};
export default styled(Scroll)`
  cursor: pointer;
  height: 40px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 30px;
  }
`;
