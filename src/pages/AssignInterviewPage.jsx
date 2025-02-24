import React from 'react'
import { useParams } from 'react-router-dom'
import AssignCandidate from '../components/candidate/AssignCandidate';
import InterviewDetails from '../components/candidate/InterviewDetails';
import ScheduleCandidate from '../components/candidate/ScheduleCandidate';

const AssignInterviewPage = () => {
    const { id } = useParams();

    return (
        <>
            <div className='mt-20'>
                <AssignCandidate id={id}/>
            </div>

            <div>
                <InterviewDetails id={id}/>
            </div>

            <div> 
                <ScheduleCandidate id={id}/>
            </div>
        </>

    )
}

export default AssignInterviewPage