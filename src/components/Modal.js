import styled from "styled-components";
import { CARD_BG_COLOR, TYPE_BG_COLOR } from "../constants";

const Container = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    background-color: white;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    display: flex;
    flex-direction: column;
`

const ImageBox = styled.article`
    background-color: ${({ firstType }) => CARD_BG_COLOR[firstType]};
`

const Image = styled.img`
    width: 100%;
    height: auto;
`

const TopDetails = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    h1 {
        font-size: 2rem;
        font-weight: normal;
        color: #404042;

        > span {
            font-size: 3rem;
            display: inline-block;
            font-weight: bold;
            color: black;

            ::first-letter {
                text-transform: uppercase;
            }
        }
    }

    div {
        padding: 1rem;
        display: flex;
        gap: 1rem;
    }
`

const TypeText = styled.span`
    color: white;
    padding: 3px 8px;
    border-radius: 5px;
    padding: 5px;
    background-color: ${({ type }) => TYPE_BG_COLOR[type]};
`

const BottomDetails = styled.article`
    display: flex;
    justify-content: space-around;

    div {
        color: #404042;

        h2 {
            transform: translateY(100%);
            font-size: 1rem;
            font-weight: normal;
        }

        p {
            transform: translateY(-100%);
            font-size: 2rem;
            font-weight: bold;
        }
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 2rem;
    padding: 0.5rem;
    &:hover {
        filter: brightness(1.3);
    }
`

function Modal(props) {
    const { activeModal, closeModal } = props

    const url = activeModal.sprites.front_default
    const pokeNumber = activeModal.id
    const name = activeModal.name
    const types = activeModal.types.map((type) => type.type.name)
    const weight = (activeModal.weight / 10).toFixed(1)
    const height = (activeModal.height / 10).toFixed(1)

    return (
        <Container>
            <ImageBox firstType={types[0]}>
                <Image src={url} alt={name} />
            </ImageBox>

            <TopDetails>
                <h1>#{pokeNumber} <span>{name}</span></h1>
                <div>
                    {types.map((type) => <TypeText key={name + type} type={type}>{type}</TypeText>)}
                </div>
            </TopDetails>

            <BottomDetails>
                <div>
                    <h2>Weight</h2>
                    <p>{weight} kg</p>
                </div>

                <div>
                    <h2>Height</h2>
                    <p>{height} m</p>
                </div>
            </BottomDetails>

            <CloseButton onClick={closeModal}>
                ❌
            </CloseButton>
        </Container>
    );
}

export default Modal;
