import styled from "@emotion/styled";

interface FooterProps {
    direction: "column" | "row"
};

export const Footer = styled.div<FooterProps>`
    display: flex;
    flex-flow: ${(props) => `${props.direction}`} nowrap;
    height: 100px;
    background-color: #f55252;
    
`;
