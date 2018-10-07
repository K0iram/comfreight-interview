import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';
import Search from '@material-ui/icons/Search';

import './style.css'


export const CustomInput = ({ label, onChange, placeholder, type, name }) => {
  return (
    <TextField
      required
      id="standard-required"
      type={type}
      label={label}
      defaultValue=""
      margin="normal"
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  )
}

export const CustomSelect = ({ name, onChange, defaultValue, values, value }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      name={name}
      displayEmpty
    >
      <MenuItem value="">
        {defaultValue}
      </MenuItem>
      {values.map((v, i) => <MenuItem key={i} value={v} name={name}>{v}</MenuItem>)}
    </Select>
  )
}

export const CustomSwitch = ({ label, onChange, checked }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          color="primary"
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  )
}

export const CustomSearch = ({searchInput, name, onChange}) => {
  return (
    <FormControl>
      <Input
        type='text'
        placeholder="search"
        value={searchInput}
        onChange={onChange}
        name={name}
        endAdornment={
          <InputAdornment position="end">
            <Search/>
          </InputAdornment>
        }
      />
    </FormControl>

  )
}