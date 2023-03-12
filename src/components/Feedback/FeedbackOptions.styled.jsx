import styled from 'styled-components';

export const FeedbackOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #2196f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
