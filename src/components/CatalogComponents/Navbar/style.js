import styled from "styled-components";
import { Link } from "react-router-dom";
export const Nav = styled.nav`
  background-color: #f4f4f4;
  width: 100.5vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1em;
  z-index: 1;

  .navMenu {
    margin-left: 5px;
    margin-right: 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #232323;
  display: flex;
  align-items: center;
`;

export const ActiveNav = styled.ul`
  background: #f4f4f4;
  left: 0;
  transition: all 0.5s ease;
  opacity: 1;
  z-index: 1;
  width: ${(props) => (props ? "100.5vw" : "0")};
  height: auto;
  padding-top: 10px;
  li {
    font-weight: 700;
    font-size: 18px;
    color: #232323;
    text-align: center;
    margin-bottom: 30px;
    width: 100%;
    height: 0px;
    display: table;
  }
`;
