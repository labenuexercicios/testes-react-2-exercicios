import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { CARD_BG_COLOR, TYPE_BG_COLOR } from "../constants";

const Container = styled.article`
    padding: 16px 0;
    color: white;
    border-radius: 8px;
    background-color: ${({ firstType }) => CARD_BG_COLOR[firstType]};
    &:hover {
        cursor: pointer;
        filter: brightness(1.07)
    }
`

const Name = styled.h2`
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.75);
    &::first-letter {
        text-transform: uppercase;
    }
`

const Image = styled.img`
    width: 100%;
    height: auto;
`

const Types = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const TypeText = styled.span`
    padding: 3px 8px;
    border-radius: 5px;
    background-color: ${({ type }) => TYPE_BG_COLOR[type]};
`

function Pokecard(props) {
    const { url, openModal, name } = props

    const [allPokemonDetails, setAllPokemonDetails] = useState({})

    const [pokemonNumber, setPokemonNumber] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [pokemonTypes, setPokemonTypes] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setImageUrl(response.data.sprites.front_default);
            setPokemonNumber(response.data.id);
            setPokemonTypes(response.data.types.map((type) => type.type.name));
            setAllPokemonDetails(response.data)
        });
    }, [url]);

    return (
        <Container firstType={pokemonTypes[0]} onClick={() => openModal(allPokemonDetails)}>
            <Name>{name}</Name>
            
            <Image src={imageUrl} alt={name} />
            
            <Types>
                {pokemonTypes.map((type) => (
                    <TypeText key={pokemonNumber + type} type={type}>
                        {type}
                    </TypeText>
                ))}
            </Types>
        </Container>
    );
}

export default Pokecard;
