import React from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { Badge } from '@mantine/core'

const MediaQuery = () => {
    const matches = useMediaQuery('(min-width:56.25em)')
  return (
<Badge color={matches ? 'blue' : 'red'} variant='filled'>
    BreakPoint {matches ? 'does not match' : ' match'}
</Badge>  
)
}

export default MediaQuery