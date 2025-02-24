import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import InterviewAssignForm from './InterviewAssignForm';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ScheduleCandidate = ({ id }) => {
    const candidateId = parseInt(id, 10);
    const [openForm, setOpenForm] = useState(false);
    return (
        <>
            <div className='flex'>
                <h1 className='text-3xl font-bold underline mt-2 ms-15'>Schedule Next Level ?</h1>
                <Switch {...label} className='mt-3 ms-10' onClick={() => setOpenForm(!openForm)} />
            </div>

            <div>
                {
                    openForm && <InterviewAssignForm candidateId={candidateId} />
                }
            </div>
        </>
    )
}

export default ScheduleCandidate