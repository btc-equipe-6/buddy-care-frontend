import styled from "styled-components";

export const CreatArea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  h1{
    display: flex;
    justify-content: center;
    width: 100%;
    color: #71c2bb;
  }
  h3{
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    margin-top: 2rem;
    color: white;
  }
`
export const FormContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: white;
  label{
    margin-right: 0.2rem;
  }
  div{
    margin-right: 1rem;;
  }
`

export const FormCreate = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 35rem;
  align-items: center;
  background-color: #71c2bb;
  border-radius: 8px;
  padding: 40px;
  button{
    border: 2px solid white;
    border-radius: 8px;
    background-color: transparent;
    padding: 0.5rem;
    width: 100%;
    color: white;
  }
`
export const CreatInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
`