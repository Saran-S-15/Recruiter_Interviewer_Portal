import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

export default function BasicTimePicker({ formik }) {
  const handleTimeChange = (newValue) => {
    const formattedTime = dayjs(newValue).format('hh:mm A');
    formik.setFieldValue("From", formattedTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
          label="From Time"
          sx={{ width: "100%", minWidth:"auto", '& .MuiOutlinedInput-root': { border: 'none' } }} 
          name="From"
          onChange={handleTimeChange}
          onBlur={formik.handleBlur}
          value={dayjs(formik.values.From, "hh:mm A")}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
