import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AssignInterviewer({ formik }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Assign Interviewer</InputLabel>
        <Select
          labelId="Assign_Interview"
          id="Assign_Interview"
          name="Assign_Interview"
          value={formik.values.Assign_Interview}
          label="Assign Interviewer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          color='black'
        >
          <MenuItem value="Interviewer">Interviewer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
