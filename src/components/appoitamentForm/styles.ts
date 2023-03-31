import styled from 'styled-components';
import { ButtonDiary } from "components/Diary/styles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s ease-in-out;
  }

  input[type="time"] {
    width: auto;
  }

  input[type="date"] {
    width: auto;
  }

  input:focus {
    outline: none;
    border-color: #7b9cf8;
  }

  ${ButtonDiary} {
    width: 100%;
    margin-top: 1rem;
    background-color: #7b9cf8;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #6673b4;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(123, 156, 248, 0.4);
    }
  }
`;

 

 
  
