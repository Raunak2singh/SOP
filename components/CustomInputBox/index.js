"use client";
import React, { useState } from 'react'
import { Box, Container, FormControl, FormControlLabel, Input,MenuItem, InputLabel, Radio, RadioGroup, Select, Typography, Tooltip } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ErrorIcon from '@mui/icons-material/Error';
function CustominputBox({data,needList,needRadio,input,label,error,value,onChange,placeholder,component,textfilled,errorMsg}) {
  

  return (
    <>
    <Box sx={{position :"relative",padding:"20px",minHeight:"100px",border:error?"1px solid #FF6C6C":"1px solid #D9D9D9",boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.1)",borderRadius:"5px",display:"flex",flexDirection:"column",gap:input?5:2}}>
    <Tooltip title='Required' >
    <ErrorIcon
    fontSize='12px'
    sx={{position:"absolute",color:"#FFC3C3",top:6,right:5}}
    />
    </Tooltip>
    <label>{label}</label>

    {component}

    {input || textfilled?<Input 
    multiline={textfilled}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    />:""}

    {needRadio?<FormControl component="fieldset">
    <RadioGroup
    name="radio-options"
    value={value}
    onChange={onChange}
    >
    {data.map((a,i)=> <FormControlLabel
        key={i}
    value={a}
    control={<Radio />}
    label={a}
    /> )}
    </RadioGroup>
    </FormControl>:""}
  

{needList? <FormControl>
    <InputLabel>Choose</InputLabel>
        <Select
        value={value}
        onChange={onChange}
        label="Choose"
        variant="outlined"
        >
            <MenuItem value="">None</MenuItem>
            {data.map((a,i)=> <MenuItem key={i} value={a}>{a}</MenuItem>)}
        </Select>
</FormControl>:""}
   {error? <Box sx={{display:"flex",flexDirection:"row",gap:1,color:"Red"}}>
            <ErrorOutlineIcon/>
            {
              (errorMsg)?
              <Typography>{errorMsg}</Typography>
              :
              <Typography>Please Attempt the quetion is required</Typography>
            }
    </Box>:""}
  </Box>
  </>
  )
}

export default CustominputBox