import styled from "@emotion/styled";
import { Url } from "url";

interface ContainerProps {
    url: string
};

export const PhotoContainer = styled.div<ContainerProps>`
    display: grid;
    align-content: flex-end;
    /* align-items: center;  */
    justify-content: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
    height: 91vh;
    margin-right: 0px;

    width: 100%;
    background-image: url(${(props) => `${props.url}`});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -60px;
    /* opacity: 0.8; */
    

    `
    ;