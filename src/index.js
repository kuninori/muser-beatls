import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify, {API} from "aws-amplify";
import awsExports from "./aws-exports";
import {useAuth0, Auth0Provider} from "@auth0/auth0-react";

Amplify.configure(awsExports);

API.get("apib7805dd0")
  .then((res) => {
    console.log(res)
  });



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={"logger-test.us.auth0.com"}
      clientId={"4i5eVcaT9bFSuhgYGewlcHbyy7u9hV74"}
      redirectUri={window.location.origin}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
