import React, { Component } from 'react';

import './user-list.scss';

/* eslint-disable-next-line */
export interface UserListProps {}

export class UserList extends Component<UserListProps> {
  render() {
    return (
      <div>
        <p>Welcome to user-list!</p>
      </div>
    );
  }
}

export default UserList;
