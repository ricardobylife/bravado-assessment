import React from 'react';
import SearchResults from '@/Components/Molecules/SearchResults';
import SearchBox from '@/Components/Atoms/SearchBox';
import api from '../../services/api';

import styled from 'styled-components';
const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 564px;
  height: 643px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #FFFFFF;
  padding: 12px;
`;


function SearchPage() {
  const [results, setResults] = React.useState<any[]>([])
  const loadRobots = React.useCallback(async () => {
    api.get('http://localhost:3100/robots')
    .then((response) => {
      console.log(response.data)
      setResults(response.data)
    })
    .catch((error) => {
      setResults([])
    })
  },[])

  React.useEffect(() => {
    loadRobots()
  }, [])
  return (
    <PageWrapper>
      <SearchBox setResults={setResults} />
      <SearchResults robots={results} />
    </PageWrapper>
  );
}

export default SearchPage;
