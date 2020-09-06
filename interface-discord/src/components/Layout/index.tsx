import React from 'react';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
      <Container>
          <ServerList />
          <ServerName />
          <ChannelInfo />
          <ChannelList />
          <UserInfo />
          <div></div>
          <UserList />
      </Container>
  );
}

export default Layout;