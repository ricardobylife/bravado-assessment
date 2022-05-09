import React from 'react';
import SearchResults from 'src/Components/Organisms/SearchResults';
import SearchBox from '@/Components/Atoms/SearchBox';

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
    const res = await fetch('/api/robots')
    const robots = await res.json()
    return robots
  },[])

  React.useEffect(() => {
    loadRobots().then(robots => {
      setResults(robots)
    }
    )
  }, [])
  return (
    <PageWrapper>
      <SearchBox setResults={setResults} />
      <SearchResults robots={results} />
    </PageWrapper>
  );
}

export default SearchPage;
