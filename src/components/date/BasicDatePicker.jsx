import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'; 

export default function BasicDatePicker({ formik }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    label="Interview Date"
                    sx={{ width: "100%" }}
                    value={formik.values.Interview_Date ? dayjs(formik.values.Interview_Date, 'DD/MM/YYYY') : null} 
                    onChange={(newValue) => {
                        const formattedDate = dayjs(newValue).format('DD/MM/YYYY');
                        formik.setFieldValue('Interview_Date', formattedDate); 
                    }}
                    onBlur={formik.handleBlur}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}