import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  title: string,
  subtitle: string,
  address: string,
  email: string
}

const HeadingWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  min-height: 80%;
`

const Title = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
`

const Subtitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.543846);
  margin: 0;
`

const Address = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.543846);
  margin: 0;
`

const Email =  styled.p`
  position: absolute;
  top: 5px;
  right: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.54);
`

function RobotHeading({title, subtitle, address, email}: HeadingProps) {
  return (
    <HeadingWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Address>{address}</Address>
      <Email>{email}</Email>
    </HeadingWrapper>
  );
}

export default RobotHeading;
