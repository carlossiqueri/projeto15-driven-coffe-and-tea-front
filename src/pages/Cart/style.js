import styled from "styled-components";
import Modal from 'react-modal'

const StyledModal = styled(Modal)`
    max-width: 610px;
    height: 300px;
    border-radius: 8px;
    padding: 12px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: calc(70vh - 300px) auto;
    background-color: white;
    
    -webkit-box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.39);
   -moz-box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.39);
   box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.39);

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button{
        cursor: pointer;
        border: none;
    }
`

const ModalTextArea = styled.textarea`
    width: 100%;
    height: 60%;
    border: 1px solid #dbdbdb;
`

const Container = styled.div`
    position: relative;
    max-width: 1280px;
    height: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3{
        margin-right: auto;
        margin-left: 11px;
    }
    a{
        margin-top: 15px;
    }
    
`

const CartItem = styled.div`
    width: 100%;
    height: 85px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ProductContent = styled.div`
   height: 55px;
   display: flex;
   align-items: center;
   justify-content: left;
`

const ProductImage = styled.img`
    width: 60px;
    height: 55px;
    border-radius: 8px;
    margin-right: 10px;
    border: none;
`

const QtdContent = styled.div`
   height: 55px;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Qtd = styled.div`
    width: 36px;
    height: 36px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;

    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AdjustmentBtn = styled.button`
    color: #FF4E4E;
    font-weight: 500;
    font-size: 1.4rem;
    background-color: transparent;
    border: none;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    :focus{
        outline: none;
    }

`

const RemoveItemBtn = styled.button`
    font-weight: 500;
    font-size: 1.4rem;
    background-color: transparent;
    border: none;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 15px;

    p:nth-child(1){
        margin-right: 60px;
    }
`

const CartFooter = styled.div`
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
     
    span{
        margin: 6px 0px;
    }
    div{
        width: 50%;
        padding: 15px;
        text-align: justify;
    }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`
export {StyledModal, ModalTextArea, Container, CartHeader, CartItem, ProductContent, ProductImage, QtdContent, Qtd, AdjustmentBtn, RemoveItemBtn, CartFooter}