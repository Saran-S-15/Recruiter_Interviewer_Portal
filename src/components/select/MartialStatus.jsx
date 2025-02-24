import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MartialStatus({formik}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Martial Status</InputLabel>
        <Select
          labelId="Martial_Status"
          color='black'
          id="Martial_Status"
          name='Martial_Status'
          value={formik.values.Martial_Status}
          label="Martial Status"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <MenuItem value="Married">Married</MenuItem>
          <MenuItem value="Unmarried">Unmarried</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
