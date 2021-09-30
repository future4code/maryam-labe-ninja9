import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <h1>LabeNinjas</h1>
      <ButtonsContainer>
        <button onClick={() => props.changePage("PaginaDeServicos")}>
          Servicos
        </button>
        <button onClick={() => props.changePage("PaginaCadastro")}>
          Cadastro
        </button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;