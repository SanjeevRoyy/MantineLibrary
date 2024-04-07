import { Box, Container } from '@mantine/core'
import React from 'react'

const SectionE = () => {
  return (
<Container   style={{display:'flex',gap:'20px'}} >
<Box style={{alignItems:'center',justifyContent:'center'}} w='100%' bg={'blue'}>
        <h1>name</h1>
        <h1>title</h1>
        <h3>price</h3>
    </Box>
    <Box w='100%' bg={'blue'}>
        <h1>name</h1>
        <h1>title</h1>
        <h3>price</h3>
    </Box>
    <Box w='100%' bg={'blue'}>
        <h1>name</h1>
        <h1>title</h1>
        <h3>price</h3>
    </Box>
</Container>  )
}

export default SectionE