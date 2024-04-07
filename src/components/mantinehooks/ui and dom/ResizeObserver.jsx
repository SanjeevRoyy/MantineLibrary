import React from 'react'
import { useResizeObserver } from '@mantine/hooks'
import { Code, Group, Text, rem} from '@mantine/core'

const ResizeObserver = () => {
    const[ref,rect]= useResizeObserver()
  return (
    <>
   <Group style={{display:'flex',flexDirection:'column'}} justify='center'>
   <textarea ref={ref} style={{width: rem(400),height:rem(120)}}/>

   <Text ta={'center'}>Rect: <Code>{JSON.stringify(rect)}</Code></Text></Group>
   </>
  )
}

export default ResizeObserver