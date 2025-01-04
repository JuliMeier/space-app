import styled from "styled-components"
import { Titulo } from "../Titulo"
import { Tags } from "./Tags"
import { Populares } from "./Populares"
import { Imagen } from "./Imagen"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


export const Galeria = ({fotos=[], alSeleccionarFoto,alAlternarFavorito}) => {
    return (
        <>
        <Tags />
        <GaleriaContainer>
        <SeccionFluida>
        <Titulo>Navegue por la galeria</Titulo>
        <ImagenesContainer>
        {
            fotos.map( foto => <Imagen 
                key={foto.id} 
                foto={foto} 
                alSolicitarZoom={alSeleccionarFoto}
                alAlternarFavorito={alAlternarFavorito} />)
        }
        </ImagenesContainer>
        </SeccionFluida>
        <Populares />
        </GaleriaContainer>
        </>
        
    )
}