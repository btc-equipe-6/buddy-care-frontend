import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  height: 100%;
  width: 100%;
  gap: 1rem;
  max-width: 1920px;
  overflow: hidden;
  color: black;
  @media screen and (max-width: 1280px) {
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 1080px) {
    padding: 2rem 1rem;
  }
`

export const PatientContainer = styled.div`
  display: grid;
  width: 51rem;
  height: 50%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`
export const InputPatient = styled.input`
  width: 51rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  border: 0.125rem solid #ccc;
  background-color: #f8f8f8;
  padding: 0.625rem;
  font-size: 1rem;
  margin-bottom: 1.25rem;
`

 