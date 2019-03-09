import React from 'react';
import styled from 'styled-components';
const isLeftGuy = who => who !== 'me' && who !== 'system';
const isMe = who => who === 'me';
const sexColor = sex => {
  if (sex === 'girl') return '#FDA7DF';
  else if (sex === 'boy') return '#1DA1F2';
  else return 'gray';
};
const Mess = styled.div`
  width:100%;
  display: flex;
  /*flex-direction: ${props => isMe(props.who) && 'row-reverse'};*/
  justify-content:${props => {
    if (props.who === 'me') return 'flex-end';
    if (props.who === 'system') return 'center';
    else return 'flex-start';
  }};
`;
const TextWrapper = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Nickname = styled.div`
  padding-left: 1em;
  opacity: 0.5;
  font-size: 14px;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${props => sexColor(props.sex)};
  user-select: none;
  flex-shrink: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;
const Text = styled.pre`
  background-color: ${props => {
    switch (props.who) {
      case 'me':
        return 'rgb(33,150,243)';
      case 'system':
        return '';
      default:
        return 'rgb(244, 244, 244)';
    }
  }};
  max-width: 90%;
  line-height: 20px  !important;;
  color: ${props => {
    switch (props.who) {
      case 'me':
        return 'white';
      case 'system':
        return 'rgba(0,0,0,0.5)';
      default:
        return 'black';
    }
  }};
  border-radius: 0.8em;
  padding: 0.5em 0.8em;
  margin: 0.5em;
  position: relative;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1em;
  font-size: 16px;
`;
const Message = ({
  who = 'me',
  sex = 'unknown',
  nickname = 'unknown',
  text
}) => {
  return (
    <Mess who={who}>
      {isLeftGuy(who) && <Circle sex={sex}>{nickname[0].toUpperCase()}</Circle>}
      <TextWrapper>
        {isLeftGuy(who) && <Nickname>{nickname}</Nickname>}
        <Text who={who}>{text}</Text>
      </TextWrapper>
    </Mess>
  );
};

export default Message;
