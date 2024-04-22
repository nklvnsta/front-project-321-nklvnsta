import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  margin-bottom: 16px; 
  margin-top: 20px;
`;

export const FeedbackForm = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 50px;
  background-color: #fefefe;
  color: #000000;

  h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      label {
        margin-bottom: 5px;
      }

      input {
        padding: 8px;
        border: 1px solid #000000;
        border-radius: 3px;
      }

      div {
        color: #f40000;
        font-size: 0.8em;
      }
    }

    button {
      padding: 10px;
      background-color: #3498db;
      color: #000000;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #2980b9;
      }

      &:active {
        background-color: #216a94;
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }
  }

  p {
    margin-top: 20px;
    font-size: 1.2em;
  }
`;
