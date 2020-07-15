import React from 'react';
import './App.css';
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();
  return <div className={"App-button"} onClick={() =>{
    loginWithRedirect()
  }}>Log In</div>
}

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Sample App. with TypeScript.</h1>
      <LoginButton />
    </div>
  );
}

export default App;

