import styled from "@emotion/styled"
import { Link } from "react-router-dom"

interface LinkProps {
color: string
}

export const StyledLink = styled<any>(Link)`
color: ${(props) => `${props.color}`};
text-decoration: none;
margin-left: 2%;

`