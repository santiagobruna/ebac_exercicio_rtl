import { fireEvent, render, screen } from "@testing-library/react"
import Post from "../../PostComments"

describe('Testes para inserção de 2 comentários', () => {
    test('Deve adicionar um comentário no Post', () => {
        const {debug} = render(<Post/>)
        // Digita o Primeiro comentário
        fireEvent.change(screen.getByTestId('comentario-input'), {
            target: {
                value: 'primeiro comentário'
            }
        })
        fireEvent.click(screen.getByTestId('enviar-button'))
        expect(screen.getByText('primeiro comentário')).toBeInTheDocument()
        // Digita o Segundo comentário
        fireEvent.change(screen.getByTestId('comentario-input'), {
            target: {
                value: 'segundo comentário'
            }
        })
        fireEvent.click(screen.getByTestId('enviar-button'))
        debug()
        expect(screen.getByText('segundo comentário')).toBeInTheDocument()
    })
})