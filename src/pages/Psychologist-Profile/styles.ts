import styled from 'styled-components'

export const ProfileSection = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin: 2rem auto;
 padding: 2rem;
 border: 1px solid red;
`
export const AboutYou = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 1rem;
 margin: 1rem;
 width: 35rem;
 background-color: white;
 border-radius: 6px;

 @media screen and (width < 768px) {
  width: 25rem;
  gap: 10px;
 }

 @media screen and (width < 500px) {
  width: 20rem;
 }

 h2 {
  font-size: 1.8rem;
  color: black;

  @media screen and (width < 768px) {
   font-size: 1.2rem;
  }
 }
`
export const Address = styled(AboutYou)``

export const AcademicInfo = styled(AboutYou)``

export const Bio = styled(AboutYou)``

export const TextArea = styled.textarea`
 width: 100%;
 padding: 10px;
 font-size: 16px;
 line-height: 1.5;
 border: 2px solid #ccc;
 border-radius: 4px;
 resize: vertical;
 margin-bottom: 20px;
`

export const Actions = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 15px;
 width: 100%;
 font-size: 1.3rem;
 font-weight: 500;

 @media screen and (width < 1025px) {
  font-size: 1rem;
 }

 @media screen and (width < 769px) {
  font-size: 0.8rem;
 }
`

export const EditButton = styled.button`
 padding: 0.1rem 0.2rem;
 background-color: aquamarine;
 color: black;
 border-radius: 5px;
 border: 0;
 cursor: pointer;
`

export const SaveButton = styled.button`
 padding: 0.1rem 0.2rem;
 background-color: aquamarine;
 color: black;
 border-radius: 5px;
 border: 0;
 cursor: pointer;
`

export const InputContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.3rem;
 width: 100%;

 label {
  font-size: 1rem;
  font-weight: 600;
 }

 input {
  padding: 0.6rem;
  width: 100%;
  height: 2rem;
  font-size: 1.4rem;
  border-radius: 5px;

  @media screen and (width < 768px) {
   font-size: 1rem;
  }
 }
`
