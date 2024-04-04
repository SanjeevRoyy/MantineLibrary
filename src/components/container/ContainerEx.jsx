import { Container } from '@mantine/core';

export default function ContainerEx() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
    // w:'100%'
   
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size="30rem" {...demoProps}>
        30rem Container without padding
      </Container>
      <Container  {...demoProps} size={"lg"} bg={'var(--mantine-color-blue-light)'}>this is my container</Container>
    </>
  );
}