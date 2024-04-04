import React from 'react';
import { Text, Button, Center } from '@mantine/core';
// import { MantineProvider } from '@mantine/core';
import { theme } from './config/mantine.config';
import Demo from './components/firstExample/Demo';
import Ratio from './components/aspectratio/Ratio';
import CenterComp from './components/center/CenterComp';
// import Demo from './components/center/createtheme/Demo';


// Define the Mantine theme

// Create your React components
function App() {
  
  return (
   <>
   


   <Demo/>
  <Ratio/>
   <CenterComp/>
  
   
   </>
     
       
  );
}

export default App;
