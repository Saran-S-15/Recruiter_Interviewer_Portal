import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes({formik}) {
  return (
    <div>
      <Checkbox
        {...label}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
        id='Checked'
        name='Checked'
        onChange={formik.handleChange}
        value={formik.values.Checked}
      />
    </div>
  );
}
