import { Center, Box,Text} from '@mantine/core';

const CenterComp = () => {
  
    return (
        <Center  h={200} bg="cyan">
      <Box >
     <Text size='xl'> All elements inside Center are centered</Text> 
    
      </Box>
    </Center>
      );
  
}

export default CenterComp