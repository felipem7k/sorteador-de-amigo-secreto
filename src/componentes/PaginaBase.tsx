import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Cabecalho from "./Cabecalho";
import { Outlet } from "react-router-dom";
import Card from "./Card";

const GlobalStyle = createGlobalStyle`
  html {
    background: #4B69FD;
    font-family: 'Poppins', sans-serif;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function PaginaBase(){
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Root>
                <Cabecalho></Cabecalho>
                <Card>
                  <Outlet></Outlet>
                </Card>
            </Root>
        </>
    );
}