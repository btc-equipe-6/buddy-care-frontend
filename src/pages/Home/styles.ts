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
  background: linear-gradient(90deg, rgba(244,244,244,1) 4%, rgba(112,194,187,1) 100%);
  color: black;
  @media screen and (max-width: 1280px) {
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 1080px) {
    padding: 2rem 1rem;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
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
`
export const ContentText = styled.h2`
  color: #ffffffff;
  padding: 0.5rem;
`
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
`

