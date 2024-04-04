import { Button, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'red',
  fontSizes:{
    sm:"8px",
    md:"12px",
    lg:"20px",

  }
});

export default function Demo() {
  return (
    <MantineProvider theme={theme}>
   <Button size='lg'>hello</Button>
    </MantineProvider>
  );
}