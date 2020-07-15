import React from 'react';
import './App.css';
import {useAuth0} from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();
  return <Button onClick={() =>{
    loginWithRedirect()
  }}>Log In</Button>
}

function App() {
  return (
    <Container>
      <Title>Sample App.</Title>
      <LoginButton />
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.div`
  display: inline-block;
  font-size: 12px;
  padding: 10px 20px;
  border: solid 1px #000;
  margin: 20px 0 0;
  cursor: pointer;
`