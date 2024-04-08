import { Button, Code, Group, Text } from '@mantine/core'
import { useStateHistory } from '@mantine/hooks'
import React from 'react'

const StateHistory = () => {
    const [value,handlers,history] = useStateHistory(1)

  return (
    <div>
        <Text>Current Value: {value}</Text>
        <Group my='md'>
            <Button onClick= { () => handlers.set(Math.ceil(Math.random() * 100) +1)}> Set Value</Button>
            <Button onClick={() => handlers.back()}> Back</Button>
            <Button onClick={()=>handlers.forward()}> Forward Value</Button>
        </Group>
        <Code block>{JSON.stringify(history,null,2)}</Code>
    </div>
  );
}

export default StateHistory