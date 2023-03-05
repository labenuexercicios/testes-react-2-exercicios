import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Pokelist from "./components/Pokelist";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Kanit', sans-serif;
        letter-spacing: 0.1em;
    }
`

const AppWrapper = styled.main`
    max-width: 1100px;
    padding: 16px;
    margin: 0 auto;
`

function App() {
    const [activeModal, setActiveModal] = useState(null)

    const openModal = (allPokemonDetails) => {
        setActiveModal(allPokemonDetails)
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <h1>Pokedex</h1>
                <Pokelist
                    activeModal={activeModal}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            </AppWrapper>
        </>
    );
}

export default App;
