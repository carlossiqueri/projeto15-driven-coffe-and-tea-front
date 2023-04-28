import styled from "styled-components";

const Input = styled.input`
    height: 40px;
    width: 100%;
    margin-bottom: 15px;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid grey;
    border-radius: 2px;

    &&:focus{
        outline: none;
    }
`

export default Input;