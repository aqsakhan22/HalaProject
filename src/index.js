import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProfile from './UserProfile/UserProfile'
import Table from './Tables/Table'
import Typography from './Typography/Typography'
import Map from './Map/Map'
import Notification from './Notification/Notification'
import Linking from './Linking'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <Table/>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
