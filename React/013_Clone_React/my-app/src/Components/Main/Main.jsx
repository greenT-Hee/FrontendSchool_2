import Detail from "../detail/Detail";

import styled from "styled-components";

const MainDiv = styled.main`
  display: flex;
  flex-flow:  wrap row;
`;

export default function Main() {
  return (
    <MainDiv>
        <Detail />
        <Detail />
        <Detail />
    </MainDiv>
  )
}
