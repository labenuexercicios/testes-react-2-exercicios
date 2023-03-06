import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/Modal";

const modalMock = {
    sprites: "https://image.front_default.png",
    id: 1,
    name: "Pokemon name",
    types:[{
        type:{
            name:"type"
        }
    }],
    weight: 120,
    height: 2
}

const closeModalMock = jest.fn()

describe("Render Modal", ()=>{
    test("Renderizar componente Modal", ()=>{
        render(<Modal activeModal={modalMock} closeModal={closeModalMock}/>)
    })

    test("Renderizar elementos do componente Modal", ()=>{
        render(<Modal activeModal={modalMock} closeModal={closeModalMock}/>)
        screen.logTestingPlaygroundURL()

        const imageSprites = screen.getByRole('img', {name: /pokemon/i})
        const pokeNumber = screen.getByText(/pokemon name/i)
        const type = screen.getByText(/type/i)
        const weight = screen.getByText(/12\.0 kg/i)
        const height = screen.getByText(/0\.2 m/i)
        const id = screen.getByRole('heading', {
            name: /#1 pokemon name/i
          })

        const button = screen.getByRole('button', {
            name: /❌/i
          })

        expect(imageSprites).toBeInTheDocument()
        expect(pokeNumber).toBeInTheDocument()
        expect(type).toBeInTheDocument()
        expect(weight).toBeInTheDocument()
        expect(height).toBeInTheDocument()
        expect(id).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    test("Teste de interação com user: ao clicar no botão de fechar, é disparada a função que fecha o modal.", async ()=>{
        const user = userEvent.setup()

        render(<Modal activeModal={modalMock} closeModal={closeModalMock}/>)

        const closeBtn = screen.getByRole('button', {
            name: /❌/i
          })
        await user.click(closeBtn)
        //Verifica se funçõa foi chamada
        expect(closeModalMock).toBeCalled()
        //verifica quantas vezes foi chamada
        expect(closeModalMock).toBeCalledTimes(1)

        expect(closeModalMock).toReturn()

    })
})