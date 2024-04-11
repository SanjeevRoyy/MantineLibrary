import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

export default function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker value={value} onChange={setValue} />;
}