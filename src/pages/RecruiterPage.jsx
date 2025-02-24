import React, { useState } from 'react'
import AddCandidate from '../components/candidate/AddCandidate'
import Button from '@mui/material/Button';
import CandidateTable from '../components/candidate/CandidateTable';

const RecruiterPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className='mx-20'>
      <div className='px-5 mt-25 h-auto bg-white shadow-2xl rounded-2xl w-[100%] p-10'>

        <div className='flex justify-between'>
          <div className='text-3xl ms-4 font-bold flex'>
            Candidate List
          </div>

          <div>
            {
              openForm ? null : (
                <div className='me-4'>
                  <Button sx={{ backgroundColor: "darkblue" }} variant="contained" onClick={() => setOpenForm(true)}>
                    Add Candidate
                  </Button>
                </div>
              )
            }
          </div>
        </div>

        <div>
          {
            openForm ? <AddCandidate setOpenForm={setOpenForm} /> : <CandidateTable search={search} setSearch={setSearch} />
          }
        </div>
      </div>
    </div>
  )
}

export default RecruiterPage