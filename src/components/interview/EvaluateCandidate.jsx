import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import RowRadioButtonsGroup from '../RowRadioButtonsGroup';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useCandidateStore } from '../../store/useCandidateStore';

const EvaluateCandidate = () => {
    const { id } = useParams();

    const candidateId = parseInt(id, 10);

    const navigate = useNavigate();

    const { candidates, candidateStatus } = useCandidateStore();

    const handleBackClick = () => {
        navigate("/interviewer");
    }

    const categories = [
        "Primary Skills",
        "Secondary Skills",
        "Job Knowledge/Process",
        "Candidate Behaviour",
        "Clarity in Communication",
        "Fluency in English",
        "Listening Skills",
        "Presentation Skills",
        "Overall Feedback"
    ];

    const formik = useFormik({
        initialValues: {
            Candidate_Interview_Status: "",

        },
        onSubmit: values => {
            candidateStatus(values, candidateId);
            navigate("/interviewer");
            formik.resetForm();
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='grid grid-cols-3 mt-20 px-10 bg-white drop-shadow-lg mx-5 rounded-xl pb-5 pt-5 mb-10'>
                <div>
                    <h1 className='text-3xl mb-5 font-semibold'>Category</h1>
                </div>
                <div>
                    <h1 className='text-3xl mb-5 font-semibold'>Rating (0-5)</h1>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold'>Comments</h1>
                </div>
                {
                    categories.map((categorie) => {
                        return <>
                            <p className='text-2xl mt-5'>{categorie}</p>
                            <Rating name="Primary_Skill_Rating" size="large" sx={{ marginTop: "20px" }} />
                            <TextField sx={{ margin: "5px" }} id="outlined-basic" label={categorie} variant="outlined" color='black' />
                        </>
                    })
                }
                <div className='col-span-3 mt-3'>
                    <hr className='opacity-10' />
                </div>
                <div>
                    <p className='text-2xl mt-5'>Final Decision</p>
                </div>
                <div className='mt-3'>
                    <RowRadioButtonsGroup formik={formik} />
                </div>
                <div className='mt-4'>
                    <Button type='submit' variant="contained" sx={{ width: "100%", backgroundColor: "darkblue" }}>Save</Button>
                </div>
                <div className='mt-3'>
                    <Button onClick={handleBackClick} variant="outlined" color='black'>Back</Button>
                </div>
            </div>
        </form>
    )
}

export default EvaluateCandidate;