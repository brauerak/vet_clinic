import styled from "@emotion/styled";

interface ContentProps {
    marginTop: string,
    marginBottom: string,
}

export const Content = styled.div<ContentProps>`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    margin-top: ${(props)=> `${props.marginTop}`};
    margin-bottom: ${(props)=> `${props.marginBottom}`}
  `