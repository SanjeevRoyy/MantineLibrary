import { useElementSize } from '@mantine/hooks';
import { rem } from '@mantine/core';

export default function ElementSize() {
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <div>Width: {width}, height: {height}</div>
    </>
  );
}