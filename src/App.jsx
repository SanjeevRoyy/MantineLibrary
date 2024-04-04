import React from 'react';
import Demo from './components/firstExample/Demo';
import Ratio from './components/aspectratio/Ratio';
import CenterComp from './components/center/CenterComp';
import ContainerEx from './components/container/ContainerEx';
import FlexEx from './components/flex/FlexEx';
import GridEx from './config/grid/GridEx';



// Define the Mantine theme

// Create your React components
function App() {

  return (
    <>
      <Demo />
      <Ratio />
      <CenterComp />
      <ContainerEx />
      <FlexEx />
      <GridEx />
    </>


  );
}

export default App;
