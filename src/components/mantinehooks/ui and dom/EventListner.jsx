import { Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';
import React, { useCallback, useState } from 'react'


const EventListner = () => {
    const [count,setCount]=useState(0);
    const increment = useCallback(()=>setCount((c) => c+1),[])
    const ref = useEventListener('click',increment)
  return (
    <Button ref={ref}>Button Clicks : {count}</Button>
  )
}

export default EventListner