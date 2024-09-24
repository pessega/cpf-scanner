import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
// import PersonReport from './components/PersonReport';
import ReportComp from './components/ReportComp/ReportComp';

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Consulta de CPF</h1>
      {/* <PersonReport /> */}
      <ReportComp />
    </>
  );
}

export default App;
