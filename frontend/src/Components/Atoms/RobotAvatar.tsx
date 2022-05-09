import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type AvatarImage = {
  src: string;
  title: string;
  alt: string;
};
const AvatarWrapper = styled.div`
  width: 134px;
  height: 136px;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 25px;
`

const Avatar = styled(Image)`
  border-radius: 5px;
  max-width: 134px;
`;

function RobotAvatar(props: AvatarImage) {
  return (
    <AvatarWrapper>
      <Avatar src={props.src} width="134" height={136} title={props.title} alt={props.alt} />
    </AvatarWrapper>
  );
}

export default RobotAvatar;
