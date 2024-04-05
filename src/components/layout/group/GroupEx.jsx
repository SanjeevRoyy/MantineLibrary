import { Button, Group } from '@mantine/core'
import React from 'react'

const GroupEx = () => {
  return (
<Group mb={20} mt={70} bg={'red'} grow  >
<Button size='xl'>First</Button>
<Button size='xl'>Second</Button>
<Button size='xl'>Third</Button>
</Group>
  )
}

export default GroupEx