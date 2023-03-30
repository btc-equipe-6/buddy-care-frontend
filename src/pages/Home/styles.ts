import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  height: 100vh;
  width: 100%;
  max-width: 1920px;
  overflow: hidden;
  color: black;

  @media screen and (max-width: 1280px) {
    padding: 2rem 2rem;
  }

  @media screen and (max-width: 1080px) {
    padding: 2rem 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ChartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 17rem;
  height: 15rem;
  margin: 0.3rem;
  background-color: #71c2bb;
  border-radius: 10%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 14rem;
    height: 12rem;
    margin: 0.2rem;
  }
`;

export const ContentText = styled.h3`
  color: #ffffffff;
  padding: 0.3rem;
`;

export const ChartBoxTwo = styled.div`
  display: flex;
  width: 25.8rem;
  height: 15rem;
  margin: 0.3rem;
  background-color: #ffffffff;
  border-radius: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 12rem;
    margin: 0.2rem;
  }
`;


