import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between
  align-items:flex-start;
  padding: 2rem 4rem;
  height: 100vh;
  width: 100%;
  max-width: 1920px;
  overflow: hidden;
  color: black;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid black;
  }

  button {
    margin-right: 1rem;
  }
`;
