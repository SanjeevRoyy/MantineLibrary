import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

export default function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <MonthPicker value={value} onChange={setValue} />;
}