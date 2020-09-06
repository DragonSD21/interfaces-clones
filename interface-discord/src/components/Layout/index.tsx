import React from 'react';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
      <Container>
          <ServerList />
          <ServerName />
          <ChannelInfo />
          <ChannelList />
      </Container>
  );
}

export default Layout;