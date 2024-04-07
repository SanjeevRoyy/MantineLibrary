import React, { useState } from 'react'
import { useMove } from '@mantine/hooks'
import { Code, Group, Text, rem } from '@mantine/core';

const Move = () => {
    const [value, setValue] = useState({ x: 0.2, y: 0.6 });
    const { ref, active } = useMove(setValue);

    return (
        <>
        <Group justify="center">
          <div
            ref={ref}
            style={{
              width: rem(400),
              height: rem(120),
              backgroundColor: 'var(--mantine-color-blue-light)',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: `calc(${value.x * 100}% - ${rem(8)})`,
                top: `calc(${value.y * 100}% - ${rem(8)})`,
                width: rem(16),
                height: rem(16),
                backgroundColor: active ? 'var(--mantine-color-teal-7)' : 'var(--mantine-color-blue-7)',
              }}
            />
          </div>
        </Group>
        <Text ta="center" mt="sm">
          Values <Code>{`{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`}</Code>
        </Text>
      </>
    );
  

}

export default Move