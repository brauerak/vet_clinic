import styled from "@emotion/styled";

interface ContentProps {
    fontSize: string
    fontWeight: string;
    color: string
}

export const ContentText = styled.div<ContentProps>`
    height: 100%;
    font-family: sans-serif;
    font-size: ${(props) => `${props.fontSize}`};
    font-weight: ${(props) => `${props.fontWeight}`};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
    padding: 10px;
    color: ${(props) => `${props.color}`}
`