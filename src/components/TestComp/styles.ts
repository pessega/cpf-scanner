import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20vw;
  padding: 130px 0 0 0;

  @media (max-width: 768px) {
    margin: 0 5vw; /
  }
  @media (min-width: 1800px) {
    margin: 0 30vw; /
  }
`;

export const LinkedPersonWrapper = styled.div`
  text-transform: capitalize;
  width: 100%;
  border-bottom: 1px solid var(--light-gray);

  padding: 20px 0;

  span {
    color: #6f7783;
  }
`;

export const ResultDataTitle = styled.div`
  background-color: var(--light-gray);
  padding: 10px;
  margin-top: 60px;

  p {
    color: var(--background);
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const PersonDataWrapper = styled.div`
  text-align: left;

  div:last-child {
    margin-bottom: 30px;
  }

  h2 {
    margin-top: 30px;
  }

  span {
    line-height: 1rem;
  }
`;

export const AttributeWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;

  div {
    flex: 1;
    text-align: right;
  }
  span {
    margin-left: 10px;
    flex: 2;
  }
`;

export const Logo = styled.img`
  margin: 40px 0;
`;

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

export const PersonDataTitle = styled.div`
  background-color: var(--dark-gray);
  margin-bottom: 30px;
  padding: 10px;
  margin-top: 30px;
  text-transform: uppercase;

  h2 {
    color: var(--text);
    font-weight: bold;
    font-size: 1.1rem;
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
