import React from 'react';

import { Container,
    Flex,
    Avatar,
    Row,
    PeopleIcon,
    Column,
    CompanyIcon,
    LocationIcon,
    EmailIcon,
    BlogIcon
} from './styles';

interface ProfileDataProps {
    username: string;
    name: string;
    avatarURL: string;
    followers: number;
    followwing: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
}

const ProfileData: React.FC<ProfileDataProps> = ({
    username,
    name,
    avatarURL,
    followers,
    followwing,
    company,
    location,
    email,
    blog,
}) => {
  return (
      <Container>
          <Flex>
            <Avatar src={avatarURL} alt='username' />

            <div>
                <h1>{name}</h1>
                <h2>{username}</h2>
            </div>
          </Flex>

          <Row>
            <li>
                <PeopleIcon />
                <b>{followers}</b>
                <span>followers</span>
                <span>·</span>
            </li>

            <li>
                <b>{followwing}</b>
                <span>followwing</span>
            </li>
          </Row>

          <Column>
            {company && (
                <li>
                    <CompanyIcon />
                    <span>{company}</span>
                </li>
            )}
            {location && (
                <li>
                    <LocationIcon />
                    <span>{location}</span>
                </li>
            )}
            {email && (
                <li>
                    <EmailIcon />
                    <span>{email}</span>
                </li>
            )}
            {blog && (
                <li>
                    <BlogIcon />
                    <span>{blog}</span>
                </li>
            )}
          </Column>
      </Container>
  );
}

export default ProfileData;