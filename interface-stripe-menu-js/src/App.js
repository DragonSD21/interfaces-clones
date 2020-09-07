import React from 'react';

import Layout from './components/Layout';
import NavBar from './components/NavBar';

import GLobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Layout>
        <NavBar />
      </Layout>
      <GLobalStyles />
    </>
  );
}

export default App;
