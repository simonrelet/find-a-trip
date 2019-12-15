import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import { CHILDREN_SPACING_SELECTOR, SPACING_UNIT } from '../styles';

const UserInfoWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  color: inherit;
  text-decoration: none;

  ${CHILDREN_SPACING_SELECTOR} {
    margin-left: ${SPACING_UNIT}em;
  }
`;

const Avatar = styled.img`
  width: 2em;
  height: 2em;
  object-fit: contain;
  border-radius: 50%;
`;

export function UserInfo({ user }) {
  return (
    <UserInfoWrapper
      href={user.links._front}
      target="_blank"
      rel="noopener noreferrer"
    >
      {user.has_picture && (
        <Avatar src={user.picture} alt={user.display_name} />
      )}

      <span>{user.display_name}</span>
    </UserInfoWrapper>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    links: PropTypes.shape({
      _front: PropTypes.string.isRequired,
    }).isRequired,
    has_picture: PropTypes.bool.isRequired,
    picture: PropTypes.string,
    display_name: PropTypes.string,
  }).isRequired,
};
