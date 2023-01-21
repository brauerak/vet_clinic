import styled from "@emotion/styled";
import { Url } from "url";

interface ContainerProps {
    direction: "column" | "row",
    url: string
};

export const PhotoContainer = styled.div<ContainerProps>`
    display: flex;
    flex-flow: ${(props) => `${props.direction}`};
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
    height: 300px;
    margin-right: 0px;
    width: 100%;
    background-image: url(${(props) => `${props.url}`});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    opacity: 0.8;

    `
    ;