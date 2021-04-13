import styled from "styled-components";

export const Titulo = styled.h1`
    font-style: italic;
    font-weight: 900;
    letter-spacing: 1px;
    text-align: center;
`;

export const InputText = styled.input`
    margin: 20px 0;
    border: 2px solid #000;
    border-radius: 50px;
    padding: 15px;
    font-size: 17px;
    width: 100%;
    background: #222;
    box-shadow: inset 5px 5px 10px -1px #000, inset 0 0 10px #535a5f;
`;

export const ButtonTodo = styled.button`
    color: ${props => props.cor};
    background: #202527;
    margin-left: 10px;
    border-radius: 50px;
    padding: 2px 10px;
    box-shadow: 1px 1px 7px #000000f0, -1px -1px 5px #747b8094;

    &:active {
        box-shadow: inset 1px 1px 7px #000000f0, inset -1px -1px 5px #747b8094;
    }
`;

export const Item = styled.li`
    word-break: break-word;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #202527;
    justify-content: space-between;
    line-height: 1.7;
    padding: 10px;
    border-radius: 20px;
    margin-top: 13px;
    box-shadow: 2px 2px 6px -1px #000, -2px -2px 6px -1px #454a4e;
`;
