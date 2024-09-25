import styled from 'styled-components';

// Styled Components

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: gray;

  &:hover {
    color: black;
  }
`;

export const SearchButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

export const PersonData = styled.div`
  margin-top: 20px;
  text-align: left;

  p {
    margin: 5px 0;
  }
`;
