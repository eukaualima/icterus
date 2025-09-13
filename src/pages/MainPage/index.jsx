import React from "react";

import { Container } from "./styles";

import icterusLogo from "../../assets/images/logo icterus.png";

function MainPage() {
  return (
    <Container>
      <img src={icterusLogo} alt="Logo Icterus" />
    </Container>
  );
}

export default MainPage;