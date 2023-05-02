import {
  StyledContainer,
  ProductPic,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductsBox,
  CartButton,
} from "./style";
import pilao from "../../../images/pilao.jpg";
import { GrStar } from "react-icons/gr";
import { IconContext } from "react-icons";
export default function Products() {
  return (
    <ProductsBox>
      <StyledContainer>
        <IconContext.Provider value={{ color: " #e69b00" }}>
          <ProductPic src={pilao} />
          <ul>
            <ProductTitle>
              <GrStar />
              Café Pilão
            </ProductTitle>
            <ProductPrice>R$ 10,00</ProductPrice>
            <ProductDescription>
              Um café pilão, muito forte e muito BÃO
            </ProductDescription>
            <CartButton>+</CartButton>
          </ul>
        </IconContext.Provider>
      </StyledContainer>

      <StyledContainer>
        <IconContext.Provider value={{ color: " #e69b00" }}>
          <ProductPic src={pilao} />
          <ul>
            <ProductTitle>
              <GrStar />
              Café Pilão
            </ProductTitle>
            <ProductPrice>R$ 10,00</ProductPrice>
            <ProductDescription>
              Um café pilão, muito forte e muito BÃO
            </ProductDescription>
            <CartButton>+</CartButton>
          </ul>
        </IconContext.Provider>
      </StyledContainer>
      <StyledContainer>
        <IconContext.Provider value={{ color: " #e69b00" }}>
          <ProductPic src={pilao} />
          <ul>
            <ProductTitle>
              <GrStar />
              Café Pilão
            </ProductTitle>
            <ProductPrice>R$ 10,00</ProductPrice>
            <ProductDescription>
              Um café pilão, muito forte e muito BÃO
            </ProductDescription>
            <CartButton>+</CartButton>
          </ul>
        </IconContext.Provider>
      </StyledContainer>

      <StyledContainer>
        <IconContext.Provider value={{ color: " #e69b00" }}>
          <ProductPic src={pilao} />
          <ul>
            <ProductTitle>
              <GrStar />
              Café Pilão
            </ProductTitle>
            <ProductPrice>R$ 10,00</ProductPrice>
            <ProductDescription>
              Um café pilão, muito forte e muito BÃO
            </ProductDescription>
            <CartButton>+</CartButton>
          </ul>
        </IconContext.Provider>
      </StyledContainer>

      <StyledContainer>
        <IconContext.Provider value={{ color: " #e69b00" }}>
          <ProductPic src={pilao} />
          <ul>
            <ProductTitle>
              <GrStar />
              Café Pilão
            </ProductTitle>
            <ProductPrice>R$ 10,00</ProductPrice>
            <ProductDescription>
              Um café pilão, muito forte e muito BÃO
            </ProductDescription>
            <CartButton>+</CartButton>
          </ul>
        </IconContext.Provider>
      </StyledContainer>
    </ProductsBox>
  );
}
