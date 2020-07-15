import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify, {API} from "aws-amplify";
import awsExports from "./aws-exports";
import {Auth0Provider} from "@auth0/auth0-react";
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={"logger-test.us.auth0.com"}
      clientId={"4i5eVcaT9bFSuhgYGewlcHbyy7u9hV74"}
      redirectUri={window.location.origin}>
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
