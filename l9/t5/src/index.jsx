import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const root = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, root);
