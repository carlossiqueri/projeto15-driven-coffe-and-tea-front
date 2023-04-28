import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    cursor: pointer;
    color: #FF4E4E;

    span{
        text-decoration: underline;
    }
`

export default StyledLink;