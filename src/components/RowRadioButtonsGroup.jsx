import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RowRadioButtonsGroup({ formik }) {
  return (
    <FormControl>
      <RadioGroup
        row
        name="Candidate_Interview_Status"
        id="Candidate_Interview_Status"
        onChange={formik.handleChange}
        aria-labelledby="demo-row-radio-buttons-group-label"
        value={formik.values.Candidate_Interview_Status}
      >
        <FormControlLabel value="Hold" control={<Radio />} label="Hold" />
        <FormControlLabel value="Reject" control={<Radio />} label="Reject" />
        <FormControlLabel value="Selected" control={<Radio />} label="Selected" />
      </RadioGroup>
    </FormControl>
  );
}