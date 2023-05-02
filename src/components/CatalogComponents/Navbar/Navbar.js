import { Nav, StyledLink } from "./style";
import { IconContext } from "react-icons";
import { BiMenu, BiUser } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import DropNav from "./DropNav";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setDropDown(!dropDown);
  };

  return (
    <>
      <Nav>
        <IconContext.Provider
          value={{ color: "#232323", size: "1.5em", className: "navMenu" }}
        >
          {click ? (
            <AiOutlineClose onClick={handleClick} />
          ) : (
            <BiMenu onClick={handleClick} />
          )}
          <StyledLink to="/">Driven Coffe & Tea</StyledLink>
          <StyledLink to="/logout">
            <BiUser />
          </StyledLink>
        </IconContext.Provider>
      </Nav>
      {dropDown ? <DropNav setDropDown={setDropDown} /> : ""}
    </>
  );
}
