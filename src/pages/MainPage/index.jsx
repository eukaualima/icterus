import React from "react";

import { MdSearch } from "react-icons/md";

import { Container, Title, Logo, Form, Input, Button } from "./styles";

import icterusLogo from "../../assets/images/logo icterus.png";


function MainPage() {
  return (
    <Container>
      <Logo src={icterusLogo} alt="Logo Icterus" />
      <Title>Icterus</Title>

      <Form>
        <Input placeholder="usuário"/>
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;