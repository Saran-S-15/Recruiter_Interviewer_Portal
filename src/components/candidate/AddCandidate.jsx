import React from 'react'
import TextField from '@mui/material/TextField';
import Submit from "../Submit";
import { useFormik } from 'formik';
import { useCandidateStore } from '../../store/useCandidateStore';
import Button from '@mui/material/Button';
import MartialStatus from '../select/MartialStatus';
import ScreeningStatus from '../select/ScreeningStatus';

const AddCandidate = ({ setOpenForm }) => {
    const { candidateForm } = useCandidateStore();

    const formik = useFormik({
        initialValues: {
            Sourcing_Channel: "",
            Candidate_Name: "",
            Contact_Number: "",
            Alternative_Contact_Number: "",
            Email_Address: "",
            Candidate_Experience: "",
            Current_Location: "",
            Native_Place: "",
            Preferred_Work_Location: "",
            Martial_Status: "",
            Current_CTC: "",
            Expected_CTC: "",
            Notice_Period: "",
            Screening_Status: ""
        },
        validate: values => {
            let error = {}

            if (values.Sourcing_Channel === "") {
                error.Sourcing_Channel = "Enter Sourcing Channel"
            }

            if (values.Candidate_Name === "") {
                error.Candidate_Name = "Enter Candidate Name"
            }

            if (values.Contact_Number === "") {
                error.Contact_Number = "Enter Contact Number"
            }else if(values.Contact_Number.length < 10 || values.Contact_Number.length > 10){
                error.Contact_Number = "Invalid Mobile Number"
            }

            if (values.Alternative_Contact_Number === "") {
                error.Alternative_Contact_Number = "Enter Alternative Contact Number"
            }else if(values.Alternative_Contact_Number.length < 10 || values.Alternative_Contact_Number.length > 10){
                error.Alternative_Contact_Number = "Invalid Mobile Number"
            }

            if (values.Email_Address === "") {
                error.Email_Address = "Enter Email Address"
            }else if(!/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(values.Email_Address)){
                error.Email_Address = "Invalid Email"
            }

            if (values.Candidate_Experience === "") {
                error.Candidate_Experience = "Enter Candidate Experience"
            }

            if (values.Current_Location === "") {
                error.Current_Location = "Enter Current Location"
            }

            if (values.Native_Place === "") {
                error.Native_Place = "Enter Native Place"
            }

            if (values.Preferred_Work_Location === "") {
                error.Preferred_Work_Location = "Enter Preferred Work Location"
            }

            if (values.Martial_Status === "") {
                error.Martial_Status = "Select Martial Status"
            }

            if (values.Current_CTC === "") {
                error.Current_CTC = "Enter Current CTC"
            }

            if (values.Expected_CTC === "") {
                error.Expected_CTC = "Enter Expected CTC"
            }

            if (values.Notice_Period === "") {
                error.Notice_Period = "Enter Notice Period"
            }

            if (values.Screening_Status === "") {
                error.Screening_Status = "Select Screening Status"
            }

            return error
        },
        onSubmit: (values) => {
            candidateForm(values)
            setOpenForm(false)
            formik.resetForm();
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='w-full flex h-auto mt-5'>
                <div className='w-full grid grid-cols-3 gap-4 px-5'>
                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Sourcing Channel"
                            id="Sourcing_Channel"
                            name='Sourcing_Channel'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Sourcing_Channel}
                        />
                        {formik.touched.Sourcing_Channel ? <span className='text-red-500'>{formik.errors.Sourcing_Channel}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Candidate Name"
                            id="Candidate_Name"
                            name='Candidate_Name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Candidate_Name}
                        />
                        {formik.touched.Candidate_Name ? <span className='text-red-500'>{formik.errors.Candidate_Name}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Contact Number"
                            id="Contact_Number"
                            name='Contact_Number'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Contact_Number}
                        />
                        {formik.touched.Contact_Number ? <span className='text-red-500'>{formik.errors.Contact_Number}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Alternative Contact Number"
                            id="Alternative_Contact_Number"
                            name='Alternative_Contact_Number'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Alternative_Contact_Number}
                        />
                        {formik.touched.Alternative_Contact_Number ? <span className='text-red-500'>{formik.errors.Alternative_Contact_Number}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Email Address"
                            id="Email_Address"
                            name='Email_Address'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Email_Address}
                        />
                        {formik.touched.Email_Address ? <span className='text-red-500'>{formik.errors.Email_Address}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Candidate Experience"
                            id="Candidate_Experience"
                            name='Candidate_Experience'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Candidate_Experience}
                        />
                        {formik.touched.Candidate_Experience ? <span className='text-red-500'>{formik.errors.Candidate_Experience}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Current Location"
                            id="Current_Location"
                            name='Current_Location'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Current_Location}
                        />
                        {formik.touched.Current_Location ? <span className='text-red-500'>{formik.errors.Current_Location}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Native Place"
                            id="Native_Place"
                            name='Native_Place'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Native_Place}
                        />
                        {formik.touched.Native_Place ? <span className='text-red-500'>{formik.errors.Native_Place}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Preferred Work Location"
                            id="Preferred_Work_Location"
                            name='Preferred_Work_Location'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Preferred_Work_Location}
                        />
                        {formik.touched.Preferred_Work_Location ? <span className='text-red-500'>{formik.errors.Preferred_Work_Location}</span> : null}
                    </div>

                    <div>
                        <MartialStatus formik={formik} />
                        {formik.touched.Martial_Status ? <span className='text-red-500'>{formik.errors.Martial_Status}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Current CTC"
                            id="Current_CTC"
                            name='Current_CTC'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Current_CTC}
                        />
                        {formik.touched.Current_CTC ? <span className='text-red-500'>{formik.errors.Current_CTC}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Expected CTC"
                            id="Expected_CTC"
                            name='Expected_CTC'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Expected_CTC}
                        />
                        {formik.touched.Expected_CTC ? <span className='text-red-500'>{formik.errors.Expected_CTC}</span> : null}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            color="black"
                            label="Notice Period (in days)"
                            id="Notice_Period"
                            name='Notice_Period'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Notice_Period}
                        />
                        {formik.touched.Notice_Period ? <span className='text-red-500'>{formik.errors.Notice_Period}</span> : null}
                    </div>

                    <div className='col-span-2'>
                        <ScreeningStatus formik={formik} />
                        {formik.touched.Screening_Status ? <span className='text-red-500'>{formik.errors.Screening_Status}</span> : null}
                    </div>

                    <div>
                        <Button
                            sx={{ width: "100%" }}
                            size='large'
                            color='black'
                            variant="outlined"
                            onClick={() => setOpenForm(false)}>
                            Back
                        </Button>
                    </div>

                    <div className='col-span-2'>
                        <Submit/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddCandidate