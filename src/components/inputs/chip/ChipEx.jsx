import React from 'react'
import { Chip, rem } from '@mantine/core'
import { IconX } from '@tabler/icons-react'

const ChipEx = () => {

  return (
    <Chip
    icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
    color="red"
    variant="filled"
    defaultChecked
  >
    Forbidden
  </Chip>
  )
}

export default ChipEx