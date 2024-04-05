import { Flex, Button } from '@mantine/core';

export default function FlexEx() {
  return (
    <Flex
      mih={100}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="space-evenly"
      align="center"
      direction="row"
      wrap="wrap"
      mt={10}
      mb={20}
    >
      <Button size='lg'>Button 1</Button>
      <Button size='lg'>Button 2</Button>
      <Button size='lg'>Button 3</Button>
    </Flex>
  );
}