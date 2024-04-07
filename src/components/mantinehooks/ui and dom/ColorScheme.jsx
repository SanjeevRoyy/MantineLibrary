import React from 'react'
import { useColorScheme } from '@mantine/hooks'
import { Badge, Button } from '@mantine/core';

const ColorScheme = () => {

    const colorScheme= useColorScheme();

  return (
    <Button color={colorScheme==='dark' ? 'blue' : 'cyan' } variant='filled'>
        Your System Color Scheme is {colorScheme} 
    </Button>
    )
}

export default ColorScheme