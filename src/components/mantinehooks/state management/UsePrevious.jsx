import { Text, TextInput } from '@mantine/core';
import { useInputState, usePrevious } from '@mantine/hooks'
import React from 'react'

const UsePrevious = () => {
    const [value, setValue] = useInputState();
    const previousValue = usePrevious(value);
  return (
<>
<TextInput
label="Enter Some Text Here"
placeholder='enter some text here'
id='previous-demo-input'
value={value}
onChange={setValue}
/>
<Text mt='md'> current value {value}</Text>
<Text > Previous value: {previousValue}</Text>
</>  
);
}

export default UsePrevious