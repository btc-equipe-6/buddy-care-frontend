import styled from 'styled-components'

export const StyledLoginForm = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 80%;
 margin-top: 40px;
 margin-bottom: auto;
 max-width: 400px;
 border-radius: 10px;
 height: 400px;
 color: white;
 background-color: #71c2bb;
 h2 {
  margin: 20px;
  font-size: 40px;
 }
 h3{
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    margin-top: 2rem;
    color: white;
    cursor: pointer;
 }
`
export const InputLogin = styled.input`
  display: flex;
  width: 90%;
  padding: 3px 5px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  height: 35px;
  font-size: 1.2rem;
`

export type StyledFormProps = {
 error: boolean
}

export const StyledForm = styled.form<StyledFormProps>`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 90%;
 div {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 5px;
  border-radius: 5px;
  border: none;
  align-items: center;
  input {
   display: flex;
   width: 100%;
   border-radius: 5px 0 0 5px;
   border-right: none;
   padding: 3px 5px;
   margin: 0;
   height: 35px;
  }
  button {
   display: flex;
   align-items: center;
   width: 2rem;
   border-left: none;
   padding: 0 5px;
   margin: 0;
   cursor: pointer;
   border-radius: 0 5px 5px 0;
   height: 35px;
  }
 }
 button {
    border: 2px solid white;
    border-radius: 8px;
    background-color: transparent;
    padding: 0.5rem;
    margin-top: 1.5rem;
    width: 90%;
    color: white;
 }
`
