import { ActiveNav } from "./style";
import { StyledLink } from "./style";

export default function DropNav(setDropDown) {
  return (
    <ActiveNav setDropDown={setDropDown}>
      <StyledLink to="/login">
        <li>Login</li>
      </StyledLink>
      <StyledLink to="/register">
        <li>Cadastre-se!</li>
      </StyledLink>
      <StyledLink to="/cart">
        <li>Carrinho</li>
      </StyledLink>
    </ActiveNav>
  );
}
