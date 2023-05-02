import styled from "styled-components";

export const ProductsBox = styled.div`
  overflow-x: calc(100vh - 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled.div`
  position: relative;
  margin: 35px 5px 20px 15px;
  width: 90%;
  height: 120px;
  display: flex;
  ul {
    margin-left: 30px;
    width: calc(100vw - 144px);
    text-align: center;
  }
`;
export const ProductPic = styled.div`
  width: 144px;
  height: 120px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 25px;
  color: #1b1e23;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #ff4e4e;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #ff4e4e;
  width: 47px;
  height: 47px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 2rem;
  position: absolute;
  bottom: 10px;
  left: 80px;
`;

export const StyledCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 90vw;
  border-radius: 5px;
  border: 2px solid #fff;
  background-color: #ff4e4e;
  position: fixed;
  bottom: 10px;
  z-index: 1;
  font-size: 20px;
  font-weight: 400;
  font-style: oblique;
  color: #000000;
`;
