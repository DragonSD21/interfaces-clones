import React from 'react';

import ServerList from '../ServerList';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
      <Container>
          <ServerList />
      </Container>
  );
}

export default Layout;