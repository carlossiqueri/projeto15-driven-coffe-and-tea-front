import { StyledCartButton } from "./style";


export default function AddCartButton(props) {
  const {cart} = props
  
  // console.log(cart)
  // for (let i =0; i <= cart.length; i++){
  //   let soma =+ Number(cart[i].price);
  //   console.log(soma)
  // }
  return (
      <StyledCartButton>
        Finalizar a Compra - Total: 
      </StyledCartButton>
  );
}
