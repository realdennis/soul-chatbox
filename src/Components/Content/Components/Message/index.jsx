import React from 'react';
import styled from 'styled-components';
const isMe = who => who === 'me';
const sexColor = sex => {
  if (sex === 'girl') return '#FDA7DF';
  else if (sex === 'boy') return '#1DA1F2';
  else return 'gray';
};
const Mess = styled.div`
  display: flex;
  flex-direction: ${props => isMe(props.who) && 'row-reverse'};
  align-items: flex-start;
  margin: 5px;
`;
const Text = styled.div`
  flex-direction: ${props => isMe(props.who) && 'row-reverse'};
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
const Pre = styled.pre`
  background-color:${props=>isMe(props.who)?'rgb(33,150,243)':'rgb(244, 244, 244)'};
  max-width: 90%;
  color: ${props=>isMe(props.who)?'white':'black'};
  border-radius: 0.8em;
  padding: 0.5em 0.8em;
  margin: 0.5em;
  position: relative;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1em;
  font-size: 16px;
  max-width: ${props => isMe(props.who) && '100%'};
`;
const Message = ({
  who = 'me',
  sex = 'unknown',
  nickname = 'unknown',
  text
}) => {
  return (
    <Mess who={who}>
      {!isMe(who) && <Circle sex={sex}>{nickname[0].toUpperCase()}</Circle>}
      <Text who={who}>
        {!isMe(who) && <Nickname>{nickname}</Nickname>}
        <Pre who={who}>{text}</Pre>
      </Text>
    </Mess>
  );
};

export default Message;
