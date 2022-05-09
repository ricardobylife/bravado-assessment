import React from 'react';
import { Robot } from '../../../utils/types';
import RobotCard from '../Molecules/RobotCard';
import styled from 'styled-components';

type Props = {
  robots: Robot[];
};

const WrapperSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function SearchResults({ robots }: Props) {
  return (
    <WrapperSearchResults>
      {robots && robots.length > 0 && robots.map((robot: Robot) => {
        return (
          <RobotCard
            key={robot.id}
            {...robot}
          />
        );
      })}
    </WrapperSearchResults>
  );
}

export default SearchResults;
