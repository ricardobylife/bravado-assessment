import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import SearchPage from '@/Components/Organisms/SearchPage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bravado Quest - Ricardo Ribeiro</title>
        <meta name="description" content="Bravado Quest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchPage />
    </>
  )
}


export default Home
