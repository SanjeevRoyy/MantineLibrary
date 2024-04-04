import React from 'react'
import { Button,Text } from '@mantine/core'
import { theme } from '../../config/mantine.config'

const Ratio = () => {
  return (
    <div style={{ padding: '20px' }}>
    <Text  size="xl" weight={500} style={{ marginBottom: '20px'}}>
      Welcome to Mantine Theme
    </Text>
    <Text size="md" style={{ marginBottom: '20px' }}>
      This is a simple text example using Mantine theme.
    </Text>
    <h1 color='deep-blue'>hello</h1>
    <Button   size="lg" variant="filled" >Click Me
    </Button>
    </div>
  )
}

export default Ratio