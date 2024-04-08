import { Button } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import React from 'react'

const Toggle = () => {
    const[value,toggle]=useToggle(["orange",'blue','cyan','teal'])
  return (
    <Button color={value} onClick={()=>toggle()}>
        {value}
    </Button>
  )
}

export default Toggle