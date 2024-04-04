import React from 'react';
import Demo from './components/firstExample/Demo';
import Ratio from './components/aspectratio/Ratio';
import CenterComp from './components/center/CenterComp';
import ContainerEx from './components/container/ContainerEx';
import FlexEx from './components/flex/FlexEx';
import GridEx from './config/grid/GridEx';
import GroupEx from './components/group/GroupEx';



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
      <GroupEx/>
    </>


  );
}

export default App;
