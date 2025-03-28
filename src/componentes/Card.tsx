import React from "react";
import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    background-color: #FFF9EB;
    flex-grow: 1;
    border-top-right-radius: 64px;
    border-top-left-radius: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:  1px solid #000000;
    box-sizing: border-box;
    margin-top: -32px;
    padding: 80px;
`

export default function Card({ children }: any) {
    return (
        <Section>
            {children}
        </Section>
    );
}