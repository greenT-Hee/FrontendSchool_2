import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  width: 1000px;
  margin: 50px auto;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const Detail = () => {
  return (
    <ContentDiv>
      <ContentH2>Detail</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </ContentDiv>
  );
};

export default Detail;