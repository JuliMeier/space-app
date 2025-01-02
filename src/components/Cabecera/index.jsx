import styled from "styled-components";
import { CampoTexto } from "../CampoTexto";

const HeaderStilizado = styled.header `
    display: flex;
    justify-content: space-between;
    padding: 60px 0px;
    img {
        width: 212px;
    }
`

export const Cabecera = () => {
    return (
        <HeaderStilizado>
            <img src="img/logo.png" alt="Logo de Space App" />
            <CampoTexto />
        </HeaderStilizado>
        
    )
}