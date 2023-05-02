import {
  StyledContainer,
  ProductPic,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductsBox,
  CartButton,
} from "./style";
import { GrStar } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddCartButton from "./AddCartButton";

export default function Products() {
  const [stock, setStock] = useState([]);
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(false);

  function addProduct() {
    console.log("cliiiiiqueiiiiiiii");
  
  }

  function getStock() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/stock`)
      .then((res) => setStock(res.data))
      .catch((err) => console.log(err.response.data));

    return { stock, setStock };
  }

  useEffect(() => {
    getStock();
  }, []);
  return (
    <ProductsBox>
      {stock.map((p, index) => {
        return (
          <StyledContainer key={index}>
            <IconContext.Provider value={{ color: " #e69b00" }}>
              <ProductPic>
                <img src={p.picture} />
              </ProductPic>
              <ul>
                <ProductTitle>
                  <GrStar />
                  {p.name}
                </ProductTitle>

                <ProductPrice>{p.price}</ProductPrice>
                <ProductDescription>{p.description}</ProductDescription>
                <IconContext.Provider value={{ color: "#fff" }}>
                  <CartButton 
                  onClick={() =>{
                    if(cart.includes(p)){
                      setCart(cart.filter((c) => c !== p))
                      console.log(cart)
                    }else{
                      setCart([...cart, p])
                      console.log(cart)
                    }

                  }}
                  >
                    {cart.includes(p) ? <AiOutlineCheck /> : "+"}
                  </CartButton>
                </IconContext.Provider>
              </ul>
            </IconContext.Provider>
          </StyledContainer>
        );
      })}
    {cart.length !== 0 ? <AddCartButton cart={cart}/> : ""}
    </ProductsBox>
  );
}
