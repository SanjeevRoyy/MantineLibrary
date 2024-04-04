import React from 'react';
import { Text, Button } from '@mantine/core';
// import { MantineProvider } from '@mantine/core';
import { theme } from './config/mantine.config';
import Demo from './components/firstExample/Demo';
import Ratio from './components/aspectratio/Ratio'


// Define the Mantine theme

// Create your React components
function App() {
  
  return (
   <>
   <Demo/>
  <Ratio/>
  
   </>
     
       
  );
}

export default App;
