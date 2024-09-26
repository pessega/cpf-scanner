import styled from 'styled-components';

// Styled Components

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 10vw;
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;

  font-weight: normal;
  max-width: 386px;
  width: 100%;
  height: 40px;
  border-radius: 10px;

  border-radius: 10px;
  background: var(--blue);
  color: var(--text);

  font-weight: normal;

  input {
    font-size: 1rem;
    color: var(--text);
    padding: 10px;
    width: 100%;
    height: 100%;
    background: none;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: var(--text);

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
  max-width: 386px;
  width: 100%;
  height: 40px;
  border-radius: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: var(--error);
  margin-top: 10px;
`;

export const PersonData = styled.div`
  margin-top: 20px;
  text-align: left;

  p {
    margin: 5px 0;
  }
`;
