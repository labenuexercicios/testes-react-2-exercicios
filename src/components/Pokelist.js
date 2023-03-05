import { useState, useEffect } from "react";
import axios from "axios";
import Pokecard from "./Pokecard";
import styled from "styled-components";
import Modal from "./Modal";
import { BASE_URL } from "../constants";

const Container = styled.section`
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    gap: 2rem;
`

function Pokelist(props) {
    const { activeModal, openModal, closeModal } = props

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL + "?limit=20").then((response) => {
            setPokemonList(response.data.results);
        });
    }, []);

    return (
        <Container>
            {pokemonList.map((pokemon) => (
                <Pokecard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    openModal={openModal}
                />
            ))}

            {activeModal &&
                <Modal
                    activeModal={activeModal}
                    closeModal={closeModal}
                />}
        </Container>
    );
}

export default Pokelist;
