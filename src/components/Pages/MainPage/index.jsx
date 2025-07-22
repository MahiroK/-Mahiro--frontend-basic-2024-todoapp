import React from "react";
import TodoCard from "../../../components/Organisms/TodoCard";
import Title from "../../../components/Atoms/Title";
import styled from "styled-components";
import { AlertManager } from "../../../components/Organisms/AlertManager"; // ← 追加

export const MainPage = () => {
  return (
    <Main>
      <StyledWrapper>
        <Title />
        <TodoCard />
        <AlertManager />
      </StyledWrapper>
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
  max-width: 100%;

  box-sizing: border-box;
  padding: 60px 20px 20px 20px;
  @media (max-width: 320px) {
    padding: 20px;
  }
`;
