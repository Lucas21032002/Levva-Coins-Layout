import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
    grid-column: 2 / 3;
    
    width: 100%;
    max-width: 1120px;
    margin: 3rem auto 0;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1.5rem auto;

    input{
        grid-column: 1 / 2;
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${(props) => props.theme["gray-700"]};
        color: ${props => props.theme["gray-300"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["gray-400"]}
        }
    }

    button {
        grid-column: 3 / 4;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;

        background-color: transparent;
        color: ${(props) => props.theme["yellow-300"]};
        border: 1px solid ${(props) => props.theme["yellow-300"]};
        border-radius: 6px;

        font-weight: bold;
        transition: all 0.3s;

        &:hover {
            cursor: pointer;

            background: ${(props) => props.theme["yellow-500"]};
            border-color: ${(props) => props.theme["yellow-500"]};
            color: ${(props) => props.theme["gray-600"]};
        }
    }
`
