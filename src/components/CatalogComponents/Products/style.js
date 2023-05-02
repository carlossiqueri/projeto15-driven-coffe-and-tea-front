import styled from "styled-components";

export const ProductsBox = styled.div`
  overflow-x: scroll;
`;

export const StyledContainer = styled.div`
  position: relative;
  margin: 35px 5px 20px 15px;
  display: flex;
  ul {
    margin-left: 30px;
  }
`;
export const ProductPic = styled.img`
  width: 144px;
  height: 120px;
  border-radius: 6px;
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
