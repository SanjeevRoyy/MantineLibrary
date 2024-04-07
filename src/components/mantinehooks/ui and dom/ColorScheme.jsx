import React from 'react'
import { useColorScheme } from '@mantine/hooks'
import { Badge } from '@mantine/core';

const ColorScheme = () => {

    const colorScheme= useColorScheme();

  return (
    <Badge color={colorScheme==='dark' ? 'blue' : 'cyan' } variant='filled'>
        Your System Color Scheme is {colorScheme} 
    </Badge>
    )
}

export default ColorScheme