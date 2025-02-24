import React from 'react'
import TextField from '@mui/material/TextField';
import BasicDatePicker from '../date/BasicDatePicker';
import BasicTimePicker from '../date/BasicTimePicker';
import AssignInterviewer from '../select/AssignInterviewer';
import InterviewStatus from '../select/InterviewStatus';
import Submit from "../Submit";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import BasicTimePicker2 from '../date/BasicTimePicker2';
import { useCandidateStore } from '../../store/useCandidateStore';
import Checkbox from '@mui/material/Checkbox';

const InterviewAssignForm = ({ candidateId }) => {
    const navigate = useNavigate();
    const { assignCandidateToInterviewer } = useCandidateStore();

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const formik = useFormik({
        initialValues: {
            Interview_Status: "",
            Assign_Interview: "",
            Interview_Date: "",
            Meeting_Link: "",
            From: "",
            To: "",
            Assigned_Candidate_to_Interviewer: true
        },
        validate: values => {
            let error = {}

            if (values.Interview_Status === "") {
                error.Interview_Status = "Select Interview Status"
            }
            if (values.Assign_Interview === "") {
                error.Assign_Interview = "Select Assign Interview"
            }
            if (values.Interview_Date === "") {
                error.Interview_Date = "Select Interview Date"
            }
            if (values.Meeting_Link === "") {
                error.Meeting_Link = "Provide Meeting Link"
            }
            if (values.From === "") {
                error.From = "Select From Timing"
            }
            if (values.To === "") {
                error.To = "Select To Timing"
            }

            return error
        },
        onSubmit: (values) => {
            try {
                assignCandidateToInterviewer(values, candidateId);
                formik.resetForm();
                navigate("/recruiter");
            } catch (error) {
                alert("Something went Wrong", error);
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='grid grid-cols-2 gap-4 mt-5 mx-10 p-5 bg-white shadow-sm rounded-lg mb-10'>
                <div>
                    <InterviewStatus formik={formik} />
                    {
                        formik.touched.Interview_Status ? <span style={{color:"red"}}>{formik.errors.Interview_Status}</span> : null
                    }
                </div>

                <div>
                    <AssignInterviewer formik={formik} />
                    {
                        formik.touched.Assign_Interview ? <span style={{color:"red"}}>{formik.errors.Assign_Interview}</span> : null
                    }
                </div>

                <div>
                    <BasicDatePicker formik={formik} />
                    {
                        formik.touched.Interview_Date ? <span style={{color:"red"}}>{formik.errors.Interview_Date}</span> : null
                    }
                </div>

                <div>
                    <TextField
                        fullWidth
                        label="Meeting Link"
                        id="Meeting_Link"
                        name='Meeting_Link'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Meeting_Link}
                        sx={{ marginTop: "6.5px" }}
                        color='black'
                    />
                    {
                        formik.touched.Meeting_Link ? <span style={{color:"red"}}>{formik.errors.Meeting_Link}</span> : null
                    }
                </div>

                <div>
                    <BasicTimePicker formik={formik} />
                    {
                        formik.touched.From ? <span style={{color:"red"}}>{formik.errors.From}</span> : null
                    }
                </div>

                <div>
                    <BasicTimePicker2 formik={formik} />
                    {
                        formik.touched.To ? <span style={{color:"red"}}>{formik.errors.To}</span> : null
                    }
                </div>

                <div className='hidden'>
                    <Checkbox {...label} />
                </div>

                <div className='flex'>
                    <Button onClick={() => navigate("/recruiter")} variant="outlined" sx={{ width: "40%" }} color="error">Back</Button>
                    <div className='w-full ms-10'>
                        <Submit />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default InterviewAssignForm