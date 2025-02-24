import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ScreeningStatus({formik}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Screening Status</InputLabel>
        <Select
          labelId="Screening_Status"
          color='black'
          id="Screening_Status"
          name='Screening_Status'
          value={formik.values.Screening_Status}
          label="Screening Status"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}

        >
          <MenuItem value="In Progress">In Progress</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
