import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export default function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <DatePicker value={value} onChange={setValue} />;
}