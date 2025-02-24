import React from 'react'
import { useCandidateStore } from '../../store/useCandidateStore'

const InterviewDetails = ({ id }) => {
    const { candidates } = useCandidateStore();

    const arrId = parseInt(id, 10);

    const particularCandidate = candidates[id - 1] || {};

    return (
        <>
            <div>
                <h1 className='text-3xl font-bold underline mt-5 ms-15'>Interview Details:</h1>
            </div>

            <div className='grid grid-cols-2 mx-5 p-5 gap-2'>
                <div className='flex flex-col gap-2 bg-white shadow-sm p-5 rounded-xl'>
                    <div className='flex'>
                        <h1 className='font-bold text-lg'>Interview Status</h1>
                        <p className='ms-auto text-lg'>{candidates[id - 1]?.Screening_Status || ""}</p>
                    </div>
                    <hr className='opacity-10' />

                    <div className='flex'>
                        <h1 className='font-bold text-lg'>Assigned Interview</h1>
                        <p className='ms-auto text-lg'>{particularCandidate ? particularCandidate.Assign_Interview : "N/A"}</p>
                    </div>
                    <hr className='opacity-10' />

                    <div className='flex'>
                        <h1 className='font-bold text-lg'>Interview Date</h1>
                        <p className='ms-auto text-lg'>{particularCandidate ? particularCandidate.Interview_Date : "N/A"}</p>
                    </div>
                    <hr className='opacity-10' />

                    <div className='flex'>
                        <h1 className='font-bold text-lg'>Meeting Link</h1>
                        <p className='ms-auto text-blue-500 cursor-pointer text-lg'>{particularCandidate ? particularCandidate.Meeting_Link : "N/A"}</p>
                    </div>
                    <hr className='opacity-10' />

                    <div className='flex'>
                        <h1 className='font-bold text-lg'>Assessment Link</h1>
                        <p className='ms-auto text-blue-500 cursor-pointer text-lg'>examPortal.com</p>
                    </div>
                    <hr className='opacity-10' />

                    <div className='flex'>
                        <h1 className='font-bold text-lg'>Interview Status</h1>
                        <p className='ms-auto text-lg'>{particularCandidate ? particularCandidate.Interview_Status : "N/A"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InterviewDetails;