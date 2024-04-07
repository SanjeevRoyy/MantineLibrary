import React from 'react'
import { Text, Code, Group, Box } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

const Mouse = () => {
    const {ref,x,y}=useMouse();
  return (
    <>
    <Group justify='center'>
    <Box ref={ref} w={300} h={180} bg="var(--mantine-color-blue-light)"   />  
    </Group>

    <Text ta={'center'}>
        Mouse Cordinates<Code>{`{x: ${x},y:${y} }`}</Code>
    </Text>
    </>
  )
}

export default Mouse