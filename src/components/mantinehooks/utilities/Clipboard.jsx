import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks'
import React from 'react'


const Clipboard = () => {
    const clipboard= useClipboard({timeout:500});

  return (
  <Button 
  color={clipboard.copied?'teal ':'blue'}
  onClick={() => clipboard.copy('hello world!')}
  >
    {clipboard.copied ? 'copied' : 'copy'}
  </Button>
  );
}

export default Clipboard