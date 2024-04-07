import React from 'react'
import './sectioncategory.css'
import { Box } from '@mantine/core'

const SectionCategory = () => {
  return (
    <>
    <Box className='Category'  >
        <select className='SelectDiv'>
            <option className='abc' name="abc" id="1">Whisky</option>
            <option  className='abc' name="abc" id="2">def</option>
            <option  className='abc' name="abc" id="3">ghi</option>
            <option  className='abc' name="abc" id="4">ijk</option>
        </select>
        <select className='SelectDiv'>
            <option name="abc" id="1">Vodka</option>
            <option name="abc" id="2">def</option>
            <option name="abc" id="3">ghi</option>
            <option name="abc" id="4">ijk</option>
        </select>
        <select className='SelectDiv'>
            <option name="abc" id="1">Gin</option>
            <option name="abc" id="2">def</option>
            <option name="abc" id="3">ghi</option>
            <option name="abc" id="4">ijk</option>
        </select>
        <select className='SelectDiv'>
            <option name="abc" id="1">Rum</option>
            <option name="abc" id="2">def</option>
            <option name="abc" id="3">ghi</option>
            <option name="abc" id="4">ijk</option>
        </select>
        <select className='SelectDiv'>
            <option name="abc" id="1">Brandy</option>
            <option name="abc" id="2">def</option>
            <option name="abc" id="3">ghi</option>
            <option name="abc" id="4">ijk</option>
        </select>
        <select className='SelectDiv'>
            <option name="abc" id="1">Wine</option>
            <option name="abc" id="2">def</option>
            <option name="abc" id="3">ghi</option>
            <option name="abc" id="4">ijk</option>
        </select>
        <select className='SelectDiv'>
            <option name="abc" id="1">Beer</option>
            <option name="abc" id="2">def</option>
            <option name="abc" id="3">ghi</option>
            <option name="abc" id="4">ijk</option>
        </select>
        <select className='SelectDiv'>
            <option name="abc" id="1">Mixture</option>
            <option name="abc" id="2">def</option>
            <option name="abc" id="3">ghi</option>
            <option name="abc" id="4">ijk</option>
        </select> 
    </Box>
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  
  )
}

export default SectionCategory