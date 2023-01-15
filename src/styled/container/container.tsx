import styled from "@emotion/styled";

interface ContainerProps {
    direction: "column" | "row"
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-flow: ${(props) => `${props.direction}`} nowrap;
    height: 80vh;
    background-color: #cac8c8;
    
`;

