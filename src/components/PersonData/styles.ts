import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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

export const PersonDataTitle = styled.div`
  background-color: var(--dark-gray);
  margin-bottom: 30px;
  padding: 10px;

  p {
    color: var(--text);
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

export const PersonDataWrapper = styled.div`
  text-align: left;

  p {
    margin: 5px 0;
    /* text-transform: uppercase; */
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
