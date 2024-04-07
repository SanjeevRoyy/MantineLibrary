import React from 'react'
import { useFocusWithin } from '@mantine/hooks';
import { TextInput, Button, Box, Text } from '@mantine/core';

const FocusWithIn = () => {
    const { ref, focused } = useFocusWithin(); //

    return (
      <div ref={ref}>
        <Box
          p="xl"
          style={{
            backgroundColor: focused ? 'var(--mantine-color-blue-light)' : 'transparent',
          }}
        >
          <Text size="sm">One of elements has focus: {focused.toString()}</Text>
          <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
          <Button mt="md">submit</Button>
        </Box>
      </div>
    );
}

export default FocusWithIn