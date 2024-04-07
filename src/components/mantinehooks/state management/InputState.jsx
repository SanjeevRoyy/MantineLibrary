import { Group, NumberInput, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

export default function InputState() {
  const [stringValue, setStringValue] = useInputState('');
  const [numberValue, setNumberValue] = useInputState(0);

  return (
    <>
    <Group 
    >
      <input
        type="text"
        value={stringValue}
        onChange={setStringValue}
      />
      <TextInput value={stringValue} onChange={setStringValue} />
      <NumberInput value={numberValue} onChange={setNumberValue} />
      </Group>
    </>
  );
}