import React from 'react'
import { useCandidateStore } from '../../store/useCandidateStore'
import { Link } from 'react-router-dom';

const AssignCandidate = ({ id }) => {
    const candidateId = parseInt(id, 10);

    const { candidates } = useCandidateStore();

    const particularCandidate = candidates[candidateId - 1] || {};

    return (
        <div className='grid grid-cols-2 mx-10 gap-10'>
            {/* 1st Grid */}
            <div className='flex flex-col gap-2 bg-white shadow-sm p-5 rounded-xl'>
                <div className='flex'>
                    <h1 className='font-bold text-lg'>Candidate Name</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Candidate_Name}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Email Address</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Email_Address}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Contact Number</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Contact_Number}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Current Location</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Current_Location}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Native Place</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Native_Place}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Martial Status</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Martial_Status}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Preferred Work Location</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Preferred_Work_Location}</p>
                </div>
            </div>

            {/* 2nd Grid */}
            <div className='flex flex-col gap-2 bg-white shadow-sm p-5 rounded-xl'>
                <div className='flex'>
                    <h1 className='font-bold text-lg'>Alternative Contact Number</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Alternative_Contact_Number}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Sourcing Channel</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Sourcing_Channel}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Candidate Experience</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Candidate_Experience}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Current CTC</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Current_CTC}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Expected CTC</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Expected_CTC}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Notice Period</h1>
                    <p className='ms-auto text-lg'>{particularCandidate.Notice_Period}</p>
                </div>
                <hr className='opacity-10' />

                <div className='flex'>
                    <h1 className='font-bold text-lg'>Upload Resume</h1>
                    <p className='ms-auto text-lg text-blue-500 underline'><Link to="">Resume.pdf</Link></p>
                </div>
            </div>
        </div>
    )
}

export default AssignCandidate