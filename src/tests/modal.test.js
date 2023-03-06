import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Modal from "../components/Modal";

describe("Modal.js",()=>{

    const activeModalMock = {
        sprites:{front_default:"http://img.png"},
        pokeNumber: 1000,
        name: "Poketeste",
        types: [{type:{name:"type"}}],
        weight: 2.0,
        height: 0.5,
    }
   

    const closeModalMock = jest.fn()

    //exercicio 2
    test("Testando renderização Modal",()=>{
        render(<Modal
            activeModal={activeModalMock} 
            closeModal={closeModalMock}/>)
        // screen.logTestingPlaygroundURL()

        const sprite = screen.getByRole('img', { name: /poketeste/i })
        const pokeNumber = screen.getByText(/poketeste/i)
        // const name = screen.getByText(/poketeste/i)
        const types = screen.getByText(/type/i)
        const weight = screen.getByText(/0\.2 kg/i)
        const height = screen.getByText(/0\.1 m/i)

        expect(sprite).toBeInTheDocument()
        expect(pokeNumber).toBeInTheDocument()
        expect(types).toBeInTheDocument()
        expect(weight).toBeInTheDocument()
        expect(height).toBeInTheDocument()
    })

    //exercício 3
    test("testando fechar modal", async()=>{
        const user = userEvent.setup()
        render(<Modal
            activeModal={activeModalMock} 
            closeModal={closeModalMock}/>)

        const btnClose = screen.getByRole('button', { name: /❌/i })

        await user.click(btnClose)
        expect(closeModalMock).toBeCalled()

    })
})