import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuthStore } from '../store/useAuthStore';


export default function AlertDialog({ open, setOpen }) {

  const { AuthUser } = useAuthStore();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`${AuthUser && AuthUser.role}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h1 className='flex justify-center'>{AuthUser && AuthUser.role == "Recruiter" ? (<p>Recruiter can create  Candidates and Verify the Details and Assign the Candidate to the Interviewer.</p>) : (<p>Interviewer can see the Assigned Candidates and Interview them on the Fixed Schedule, and Share his Feedback.</p>)}</h1>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}