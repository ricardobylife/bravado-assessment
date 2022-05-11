import React from 'react';
import styled from 'styled-components';
import { getRobots } from 'services/robots';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 48px;
  margin-bottom: 20px;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  position: absolute;
  top: 15px;
  left: 8px;
`;

const SearchInput = styled.input`
  width: 524px;
  height: 48px;
  box-sizing: border-box;
  background: #fafafa;
  border: none;
  padding: 0 16px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  padding-left: 36px;
`;

function searchBox({ setResults }: { setResults: (results: any) => void }) {
  const [query, setQuery] = React.useState('');

  const findRobots = React.useCallback( async (query: string) => {
    getRobots(query);
  },[query])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    findRobots(e.target.value);
  }


  return (
    <SearchWrapper>
      <SearchIcon src="/search.png" alt="search" width="24" height="24" />
      <SearchInput type="text" placeholder="Search" onChange={handleChange} value={query} />
    </SearchWrapper>
  );
}

export default searchBox;
