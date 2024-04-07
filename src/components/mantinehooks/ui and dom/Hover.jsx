import React from 'react'
import { useHover } from '@mantine/hooks'
const Hover = () => {
    const{ref,hovered}=useHover();
  return (
   <div ref={ref}>
    {hovered ? 'I am hovered' : 'put mouse over me '}
   </div>
  )
}

export default Hover