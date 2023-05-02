import { ActiveNav } from "./style";
import { StyledLink } from "./style";

export default function DropNav(setDropDown) {
  return (
    <ActiveNav setDropDown={setDropDown}>
      <StyledLink to="/cart">
        <li>Carrinho</li>
      </StyledLink>
      <StyledLink to="/contact">
        <li>Fale conosco!</li>
      </StyledLink>
    </ActiveNav>
  );
}
