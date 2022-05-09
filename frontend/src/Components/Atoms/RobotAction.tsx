import React from 'react';
import styled from 'styled-components';

const RobotButton = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #009688;
  &:hover {
    text-decoration: underline;
  }
`

function RobotAction({active, action}: {active: boolean, action: () => void}) {
  const text = active ? 'SKIP SELECTION' : 'MARK AS SUITABLE'
  return (
    <RobotButton onClick={action}>{text}</RobotButton>
  );
}

export default RobotAction;
