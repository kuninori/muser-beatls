import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();
  return <button onClick={() =>{
    console.log("login?")
    loginWithRedirect()
  }}>Log In</button>
}

function App() {
  return (
    <div className="App">
      <LoginButton />
    </div>
  );
}

export default App;
