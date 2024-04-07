import { Button,Stack } from '@mantine/core';
import { useFullscreen } from '@mantine/hooks'
import React from 'react'

const FullScreen =() =>{
    const { toggle,ref, fullscreen } = useFullscreen();

    return (

        <Stack align='center' >
        <img
          ref={ref}
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
          alt="For demo"
          width={200}
        />

      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Button>
      </Stack>
    );
}

export default FullScreen