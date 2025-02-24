import React from 'react'
import { useCandidateStore } from '../store/useCandidateStore'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';

const InterviewerPage = () => {
  const { candidates } = useCandidateStore();
  if (!Array.isArray(candidates)) {
    return <div className='text-center p-3 font-bold'>Error: Candidates data not available</div>;
  }
  return (
    <div className='mt-30 mx-10'>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-center">S.No</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Candidate Name</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Assigned By</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Interview Date</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Interview From Time</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Interview To Time</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Current Status</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Meeting Link</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Status</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {
            candidates.length > 0 ? candidates.map((candidate) => {
              if (!candidate?.Assigned_Candidate_to_Interviewer) return null;
              return <tr key={candidate.id}>
                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.id}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Candidate_Name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Sourcing_Channel}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Interview_Date}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.From}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.To}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Interview_Status}</td>
                <td className="border border-gray-300 px-4 py-2 text-center"><p className='text-blue-500 cursor-pointer'>{candidate.Meeting_Link}</p></td>
                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Screening_Status ? candidate.Screening_Status : "Pending"}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Link to={`/evaluateCandidate/${candidate.id}`}><RemoveRedEyeIcon className='cursor-pointer' /></Link>
                </td>
              </tr>
            }) : <tr>
              <td colSpan="10" className='text-center p-3 font-bold'>No Candidates Assigned</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default InterviewerPage