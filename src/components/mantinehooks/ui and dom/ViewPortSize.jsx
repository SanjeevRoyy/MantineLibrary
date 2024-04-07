import { useViewportSize } from '@mantine/hooks';

export default function ViewPortSize() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}