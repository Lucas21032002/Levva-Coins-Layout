import styled, { css } from "styled-components";


export const HeaderContainer = styled.header`
    background: linear-gradient(to bottom, black, #282829);
    padding: 2.5rem 0.7rem;
    
    grid-column-start: 1;
    grid-column-end: 4;

    display: grid;
    grid-template-columns: 1fr 70rem 7rem 1fr;

    border-bottom: 1px solid ${(props) => props.theme["yellow-500"]}30;
`;


export const HeaderContent = styled.div`
    width: 100%;
    max-width: 70rem;

    grid-column: 2;

    display: flex;
    justify-content: space-around;
    align-items: center;
`


export const NewCategoryButton = styled.button`
    height: 50px;
    background: ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme.white};

    border: 1px solid transparent;
    border-radius: 6px;
    font-weight: bold;

    padding: 0 1.25rem;
    margin-right: 1rem;

    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme["gray-600"]};
        color: ${(props) => props.theme["yellow-500"]};
        border: 1px solid ${(props) => props.theme["yellow-500"]};
    }
`


export const NewTransactionButton = styled.button`
    height: 50px;
    background: ${(props) => props.theme["yellow-300"]};
    color: ${(props) => props.theme["gray-600"]};

    border: 0;
    border-radius: 6px;
    font-weight: bold;

    padding: 0 1.25rem;
    margin-right: 1rem;

    transition: background-color 0.3s;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme["yellow-500"]};
}
`
interface UserAvatarProps {
    variant?: "large";
}

export const UserAvatar = styled.img<UserAvatarProps>`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 2px solid transparent;
    box-shadow: 0px 0px 10px 10px #00000010;

    grid-column: 3 / 4;
    display: flex;
    justify-self: flex-end;

    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        border: 2px solid ${(props) => props.theme["yellow-500"]};
        box-shadow: 0px 0px 10px 20px #00000015;
    }

    ${(props) => props.variant === "large" &&
        css`
            width: 8rem;
            height: 8rem;
            margin-bottom: 1rem; 
        `
    }
`;

export const SignOutButton = styled.button`
background: ${(props) => props.theme["gray-600"]};
color: ${(props) => props.theme["white"]};
width: 100%;

padding: 1rem 0;
margin-top: 1.5rem;

border-radius: 6px;
border: 1px solid ${(props) => props.theme["yellow-300"]};
font-weight: bold;

transition: all 0.5s ease;

&:hover {
  cursor: pointer;
  background: ${(props) => props.theme["yellow-500"]};
  border: 1px solid ${(props) => props.theme["yellow-500"]};
  color: ${(props) => props.theme["black"]};
}
`