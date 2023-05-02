import { useEffect, useState } from "react";
import {
  StyledModal,
  ModalTextArea,
  AdjustmentBtn,
  Container,
  CartItem,
  QtdContent,
  Qtd,
  ProductContent,
  ProductImage,
  RemoveItemBtn,
  CartFooter,
  CartHeader,
  StyledHeader,
} from "./style";
import StyledLink from "../../components/AuthComponents/StyledLink.js";
import Button from "../../components/AuthComponents/Button";
import { products } from "../../utils/cartItens";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import useKickOut from "../../hooks/useKickOut";

export default function Cart() {
  //hooks
  const navigate = useNavigate();

  //// states

  // cart itens
  const [cartItens, setcartItens] = useState([]);

  // modal
  const [modalIsOpen, setIsOpen] = useState(false);

  // observação temporaria
  const [tempObs, setTempObs] = useState("");

  // observação vinda do mdal
  const [obs, setObs] = useState("");

  //subtotal
  let [subtotal, setSubTotal] = useState(0);

  // entrega
  const [valorEntrega, setValorEntrega] = useState(10);

  //total
  let [total, setTotal] = useState(0);

  ////funções
  // insere observação
  function insertObs() {
    setObs(tempObs);
    setIsOpen(false);
  }
  // acresenta a quantidade de produto
  function insertQtd(id) {
    const copyCartItens = [...cartItens];

    const item = copyCartItens.find((product) => product.id === id);

    if (!item) {
      copyCartItens.push({ id: id, qtd: 1 });
    } else {
      item.qtd = item.qtd + 1;
    }

    setcartItens(copyCartItens);

    const copySubTotal = copyCartItens.reduce(
      (prevValue, elem) => prevValue + elem.price * elem.qtd,
      0
    );

    setSubTotal(copySubTotal);
  }

  // diminui a quantidade de produto
  function removeQtd(id) {
    const copyCartItens = [...cartItens];

    const item = copyCartItens.find((product) => product.id === id);

    if (!item) {
      return;
    } else if (item.qtd > 1) {
      item.qtd = item.qtd - 1;
    }

    setcartItens(copyCartItens);

    const copySubTotal = copyCartItens.reduce(
      (prevValue, elem) => prevValue + elem.price * elem.qtd,
      0
    );

    setSubTotal(copySubTotal);
  }

  // remove o item do carrinho
  function removeItem(id) {
    const copyCartItens = [...cartItens];

    const item = copyCartItens.find((product) => product.id === id);

    if (!item) {
      return;
    } else {
      var arr = filterItem(copyCartItens, "id", id);
    }

    setcartItens(arr);

    const copySubTotal = arr.reduce(
      (prevValue, elem) => prevValue + elem.price * elem.qtd,
      0
    );

    setSubTotal(copySubTotal);
  }

  function filterItem(arr, prop, value) {
    return arr.filter(function (i) {
      return i[prop] !== value;
    });
  }

  // esvaziar carrinho
  function emptyCart() {
    setcartItens([]);
    setSubTotal(0);
  }

  useEffect(() => {
    setcartItens(products);

    const copySubTotal = products.reduce(
      (prevValue, elem) => prevValue + elem.price * elem.qtd,
      0
    );

    setSubTotal(copySubTotal);
  }, []);
  // KickOut
  // useKickOut();
  // component
  return (
    <Container id="#main">
      <IconContext.Provider value={{ color: "#fff", size: "1.2em" }}>
        <StyledHeader>
          CARRINHO <AiOutlineShoppingCart />
        </StyledHeader>
      </IconContext.Provider>
      <StyledModal isOpen={modalIsOpen}>
        <div>
          <p>Observação</p>
          <button onClick={() => setIsOpen(false)}>x</button>
        </div>

        <ModalTextArea
          maxLength={300}
          value={tempObs}
          onChange={(e) => setTempObs(e.target.value)}
        ></ModalTextArea>
        <Button onClick={insertObs}>
          {obs === "" ? "Adicionar" : "Editar"}
        </Button>
      </StyledModal>

      <CartHeader>
        <p>Seus {cartItens.length} itens</p>
        <p>Valor unit.</p>
        <p>Qtd.</p>
        <p>valor total</p>
        <p></p>
      </CartHeader>

      {cartItens.map((product) => (
        <CartItem>
          <ProductContent>
            <ProductImage src={product.image} />
            <p>{product.title}</p>
          </ProductContent>

          <p>R$ {product.price.toFixed(2)}</p>

          <QtdContent>
            <AdjustmentBtn onClick={() => removeQtd(product.id)}>
              -
            </AdjustmentBtn>
            <Qtd>{product.qtd}</Qtd>
            <AdjustmentBtn onClick={() => insertQtd(product.id)}>
              +
            </AdjustmentBtn>
          </QtdContent>

          <p>R$ {(product.price * product.qtd).toFixed(2)}</p>

          <RemoveItemBtn onClick={() => removeItem(product.id)}>
            x
          </RemoveItemBtn>
        </CartItem>
      ))}

      <CartFooter>
        <div>
          <p>{obs}</p>
          <StyledLink onClick={() => setIsOpen(true)}>
            {obs === "" ? "Adicionar observação" : "Editar observação"}
          </StyledLink>
        </div>

        <div>
          <StyledLink onClick={emptyCart}>
            <ion-icon name="trash-outline"></ion-icon>Esvaziar Carrinho
          </StyledLink>
          <span>Subtotal: R$ {subtotal.toFixed(2)}</span>
          <span>Entrega (SP): R$ {valorEntrega.toFixed(2)}</span>
          <span>VALOR TOTAL: R$ {(subtotal + valorEntrega).toFixed(2)}</span>
        </div>
      </CartFooter>

      <Button onClick={() => navigate("/checkout")}>
        Avançar <ion-icon name="chevron-forward-outline"></ion-icon>
      </Button>
      <StyledLink to={"/"}>
        <small>Continuar comprando</small>
      </StyledLink>
    </Container>
  );
}
