import styled from "@emotion/styled";

interface FooterProps {
    direction: "column" | "row"
};

export const Footer = styled.div<FooterProps>`
    display: flex;
    flex-flow: ${(props) => `${props.direction}`} nowrap;
    height: 100px;
    background-color: #b2dfdb;
    
`;


// Utworzyć osobny folder z treścią jako const content = [{}] i załączyć go do ContentContainer wzorując się na 106-108 app-bar.tsx

// To samo zrobić z Footer lub zakodować jego treść na sztywno.