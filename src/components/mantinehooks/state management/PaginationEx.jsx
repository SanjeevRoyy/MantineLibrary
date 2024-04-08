import { Text, Pagination } from '@mantine/core';

export default function PaginationEx() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={10} siblings={1} defaultValue={10} />

      
    </>
  );
}