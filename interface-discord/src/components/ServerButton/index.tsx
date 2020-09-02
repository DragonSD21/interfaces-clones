import React from 'react';

import { Container, RocketseatLogo } from './styles';

export interface ServerButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ServerButtonProps> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  return (
      <Container
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
      >
          {isHome && <RocketseatLogo />}
      </Container>
  );
}

export default ServerButton;