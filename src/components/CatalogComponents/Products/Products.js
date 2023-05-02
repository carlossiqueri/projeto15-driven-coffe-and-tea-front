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
import { useNavigate } from "react-router-dom";


export default function Products() {
  const [stock, setStock] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
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

                <ProductPrice>R$ {p.price.toFixed(2)}</ProductPrice>
                <ProductDescription>{p.description}</ProductDescription>
                <IconContext.Provider value={{ color: "#fff" }}>
                  <CartButton
                    onClick={() => {
                      if (cart.includes(p)) {
                        setCart(cart.filter((c) => c !== p));
                      } else {
                        setCart([...cart, p]);
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
      {cart.length !== 0 ? (
        <AddCartButton
          onClick={() => {
            axios
              .post(`${process.env.REACT_APP_API_URL}/cart`, cart)
              .then((res) => navigate("/cart"))
              .catch((err) => console.log(err.response.data));
          }}
        />
      ) : (
        ""
      )}
    </ProductsBox>
  );
}
