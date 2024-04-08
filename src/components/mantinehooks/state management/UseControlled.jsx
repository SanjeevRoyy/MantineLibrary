import { useUncontrolled } from '@mantine/hooks';

export default function UseControlled({ value, defaultValue, onChange }) {
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 'Final',
    onChange,
    
  });

  return (
    <input
      type="text"
      value={_value}
      onChange={(event) => handleChange(event.currentTarget.value)}
    />
  );
}