import React from 'react';
// import Demo from './components/layout/firstExample/Demo';
// import Ratio from './components/layout/aspectratio/Ratio';
// import CenterComp from './components/layout/center/CenterComp';
// import ContainerEx from './components/layout/container/ContainerEx';
// import FlexEx from './components/layout/flex/FlexEx';
// import GridEx from './components/layout/grid/GridEx';
// import GroupEx from './components/layout/group/GroupEx';
// import SimpleGridEx from './components/layout/simplegrid/SimpleGridEx';
// import SpaceEx from './components/layout/space/SpaceEx';
// import StackEx from './components/layout/stack/StackEx';
// import CheckBoxEx from './components/inputs/checkbox/CheckBoxEx';
// import ChipEx from './components/inputs/chip/ChipEx';
// import SectionE from './components/SectionE';
import '/app.css';
import Navbar from './components/liquorshop/Nabvar';
import ProductsGrid from './components/liquorshop/ProductsGrid';
import SectionCategory from './components/liquorshop/SectionCategory';
import CategoryR from './components/liquorshop/CategoryR';
import UseClickOutside from './components/mantinehooks/ui and dom/UseClickOutside';
import ColorScheme from './components/mantinehooks/ui and dom/ColorScheme';




// Define the Mantine theme

// Create your React components
function App() {

  return (
    <>
      {/* <Demo />
      <Ratio />
      <CenterComp />
      <ContainerEx />
      <FlexEx />    
      <GridEx/>
      <GroupEx/>
      <SimpleGridEx/>
      <SpaceEx/>
      <StackEx/> */}
      {/* <CheckBoxEx/>
      <ChipEx/> */}
    {/* <SectionE/> */}
    {/* <ProductsGrid/>
    <SectionCategory/>
  <CategoryR/> */}
  <Navbar/>
  <UseClickOutside/>
  <ColorScheme/>
    </>


  );
}

export default App;
