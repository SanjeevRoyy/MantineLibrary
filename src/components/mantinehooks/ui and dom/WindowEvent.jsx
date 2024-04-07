import { useRef } from 'react';
import { useWindowEvent } from '@mantine/hooks';

export default function WindowEvent() {
  const inputRef = useRef()

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      inputRef.current.focus();
    }
  });

  return <input ref={inputRef} />;
}
