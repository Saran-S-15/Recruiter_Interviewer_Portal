import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Submit from '../components/Submit';
import Checkboxes from '../components/Checkboxes';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
      Checked: true
    },
    validate: values => {
      let error = {}

      if (values.Email === "") {
        error.Email = "Please enter Email Address"
      }

      if (values.Password === "") {
        error.Password = "Please enter Password"
      }

      return error
    },
    onSubmit: (values) => {
      const role = login(values);
      if (role == "Recruiter") {
        navigate("/recruiter")
        if (values.Checked) {
          localStorage.setItem("Recruiter", JSON.stringify(values));
        }
      }
      else if (role == "Interviewer") {
        navigate("/interviewer")
        if (values.Checked) {
          localStorage.setItem("Interviewer", JSON.stringify(values));
        }
      }
      else {
        alert("Invalid Credentials")
      }
      formik.resetForm();
    }
  })

  useEffect(() => {
    const savedCredentials = JSON.parse(localStorage.getItem("Recruiter" || "Interviewer" || null));
    if (savedCredentials) {
      formik.setValues(savedCredentials);
    }
  }, [])


  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-hidden'>

      <div>
        <h1 className='font-bold text-5xl'>Login</h1>
      </div>

      <div className='w-[500px] h-auto'>

        <form onSubmit={formik.handleSubmit}>
          <div className='mt-4'>
            <TextField
              fullWidth
              type='email'
              color='black'
              label="Email Address"
              id="Email"
              name="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Email}
            />
            {
              formik.touched.Email ? <span style={{ color: "red" }}>{formik.errors.Email}</span> : null
            }
          </div>

          <div className='mt-4'>
            <TextField
              fullWidth
              type='password'
              color='black'
              label="Password"
              id="Password"
              name="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Password}
            />
            {
              formik.touched.Password ? <span style={{ color: "red" }}>{formik.errors.Password}</span> : null
            }
          </div>

          <div className='mt-4 flex h-4 items-center'>
            <Checkboxes formik={formik} />
            <p className='font-medium cursor-pointer'>Remember Me</p>
          </div>

          <div className='mt-4'>
            <Submit />
          </div>
        </form>

      </div>
    </div>
  )
}

export default LoginPage