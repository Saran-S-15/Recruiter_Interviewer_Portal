import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function InterviewStatus({ formik }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Interview Status</InputLabel>
        <Select
          labelId="Interview_Status"
          id="Interview_Status"
          name="Interview_Status"
          value={formik.values.Interview_Status}
          label="Age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          color='black'
        >
          <MenuItem value="Level 1">Level 1</MenuItem>
          <MenuItem value="Final HR Discussion">Final HR Discussion</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
