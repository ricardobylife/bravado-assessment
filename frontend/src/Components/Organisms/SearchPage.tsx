import React from 'react';
import SearchResults from '@/Components/Molecules/SearchResults';
import SearchBox from '@/Components/Atoms/SearchBox';

import styled from 'styled-components';
import { getRobots } from 'services/robots';
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
    const data = await getRobots();
    setResults(data);
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
