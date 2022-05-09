import React from 'react';
import styled from 'styled-components';
import RobotAvatar from '../Atoms/RobotAvatar';
import RobotHeading from '../Atoms/RobotHeading';
import RobotAction from '../Atoms/RobotAction';


type RobotCardProps = {
  avatar: string,
  name: string,
  email: string,
  title: string,
  city: string,
  address: string,
}

interface CardProps {
  readonly isActive: boolean;
}

const CardWrapper = styled.div<CardProps>`
  display: flex;
  height: 136px;
  width: 524px;
  background: #FAFAFA;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  margin-bottom: 12px;
  border: ${(props) => (props.isActive ? '1px solid #4765FF' : 'none')};
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 134px);
`;


function RobotCard(props: RobotCardProps) {
  const { avatar, name, title, city, address, email } = props;
  const [active, setActive] = React.useState(false);
  const handleClick = React.useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <CardWrapper isActive={active}>
      <RobotAvatar src={avatar} title={title} alt={name} />
      <CardContent>
        <RobotHeading
          title={name}
          email={email}
          subtitle={title}
          address={`${address}, ${city}`}
        />
        <RobotAction active={active} action={handleClick} />
      </CardContent>
    </CardWrapper>
  );
}

export default RobotCard;
