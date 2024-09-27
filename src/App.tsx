import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
// import PersonReport from './components/PersonReport';
import ReportComp from './components/ReportComp/ReportComp';
import TestComp from './components/TestComp/TestComp';

function App() {
  return (
    <>
      <GlobalStyles />
      <ReportComp />
      <TestComp />
    </>
  );
}

export default App;
