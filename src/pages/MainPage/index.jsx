import React, { useState } from "react";

import { MdSearch } from "react-icons/md";

import { Container, Title, Logo, Form, Input, Button } from "./styles";

import icterusLogo from "../../assets/images/logo icterus.png";


function MainPage() {
  const [login, setLogin] = useState('');
  
  return (
    <Container>
      <Logo src={icterusLogo} alt="Logo Icterus" />
      <Title>Icterus</Title>

      <Form>
        <Input placeholder="usuário" value={login} onChange={(event) => setLogin(event.target.value)}/>
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;