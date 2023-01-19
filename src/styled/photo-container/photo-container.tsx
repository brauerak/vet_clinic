import styled from "@emotion/styled";
import { Url } from "url";

interface ContainerProps {
    direction: "column" | "row",
    height: string,
    url: string
};

export const PhotoContainer = styled.div<ContainerProps>`
    display: flex;
    flex-flow: ${(props) => `${props.direction}`} nowrap;
    height: ${(props) => `${props.height}`};
    background-color: #0e4e6c;
    background-image: url(${(props) => `${props.url}`});
    `
    ;