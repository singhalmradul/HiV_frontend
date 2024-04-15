import { styled } from 'styled-components';

export const Input = styled.input`
    display: none;
`;

export const Label = styled.label`
    background-color: #c2fbd7;
    border-radius: 100px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: Caveat Brush,CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 20px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
        transform: scale(1.1);
    }
    margin: 20px;
`;

export const FileInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    user-select: none;
`;