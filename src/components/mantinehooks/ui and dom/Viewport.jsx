import React from 'react'
import { Box, Text } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';



const Viewport = () => {
    const {ref,inViewport} = useInViewport();

  return (
    <>
    <Text ta={'center'}>{inViewport ? 'Box is Visible' : 'Scrool to see box'}</Text>
    <Box h={64} style={{overflow:'scroll'}}>
        <Box h={128}></Box>
        <Box ref={ref} bg={'blue'} h={32} p={8}>
            <Text ta={'center'} c={"white"}>
                A Box
            </Text>
        </Box>
    </Box>
    </>
  )
}

export default Viewport