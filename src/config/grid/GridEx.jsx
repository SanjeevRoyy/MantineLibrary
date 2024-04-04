import { Grid } from '@mantine/core';

export default function GridEx() {
  return (
    <Grid   align='center'   gutter="xs">
      <Grid.Col   style={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}  bg={'green'} span={4}>
        <h1>helo grid</h1>
        <h2>heading 2</h2>
        <h3>heading 4</h3>
      </Grid.Col>
      <Grid.Col  style={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}} bg={'red'} span={4}> <h1>helo grid</h1> 
        <h2>heading 2</h2>
        <h3>heading 4</h3></Grid.Col>
      <Grid.Col  style={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}  bg={'blue'}span={4}> <h1>helo grid</h1>
        <h2>heading 2</h2>
        <h3>heading 4</h3></Grid.Col>
      <Grid.Col  style={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}  bg={'yellow'} span={4}> <h1>helo grid</h1>
        <h2>heading 2</h2>
        <h3>heading 4</h3></Grid.Col>
      <Grid.Col  style={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}  bg={'pink'} span={4}> <h1>helo grid</h1>
        <h2>heading 2</h2>
        <h3>heading 4</h3></Grid.Col>
    </Grid>
  );
}