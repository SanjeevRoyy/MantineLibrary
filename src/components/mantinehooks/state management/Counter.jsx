import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

export default function Counter() {
  const [count, setCounts] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Group justify="center">
      <Text>Count: {count}</Text>
        <Button onClick={setCounts.increment}>Increment</Button>
        <Button onClick={setCounts.decrement}>Decrement</Button>
        <Button onClick={setCounts.reset}>Reset</Button>
        <Button onClick={() => setCounts.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}