import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${props => props.color};
  border: none;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  color: white;
  padding: 15px 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  :focus {
    border: none;
    outline: none;
  }
`;
