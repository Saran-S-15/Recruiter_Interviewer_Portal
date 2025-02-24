import React from 'react';
import { useCandidateStore } from '../../store/useCandidateStore';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

const CandidateTable = () => {
    const { candidates, removeCandidate, addSingleCandidate } = useCandidateStore();
    
    const navigate = useNavigate();

    const deleteCandidate = (id) => {
        removeCandidate(id)
    }

    const candidateAssign = (candidate, id) => {
        navigate(`/candidate/${id}`);
    }
    return (
        <div className="p-4">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-center">S.No</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Candidate Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Experience</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">CTC Expected</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Contact Number</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Recruiter</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Status</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        candidates.length > 0 ? candidates.map((candidate, index) => {
                            return <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Candidate_Name}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Candidate_Experience}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Expected_CTC}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Contact_Number}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Sourcing_Channel}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{candidate.Screening_Status}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <DeleteIcon className='cursor-pointer' onClick={() => deleteCandidate(index)} />
                                    <RemoveRedEyeIcon className='cursor-pointer' onClick={() => candidateAssign(candidate, index + 1)} />
                                </td>
                            </tr>
                        }) : <tr><td colSpan="8" className='p-3 font-bold text-center'>No Candidates Created</td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CandidateTable;