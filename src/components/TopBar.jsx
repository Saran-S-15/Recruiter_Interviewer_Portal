import React, { useState } from 'react'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import AlertDialog from './AlertDialog';


const TopBar = () => {
    const { logout, AuthUser } = useAuthStore();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/")
    }
    return (
        <div style={{ backgroundColor: "darkblue" }} className='w-full py-2 flex fixed top-0 z-10'>
            <div className='flex items-center gap-2'>
                <div className='ms-2 text-white'>
                    <WorkOutlineIcon />
                </div>
                <div className='text-4xl font-bold text-white'>
                    Recruit
                </div>
            </div>

            {
                AuthUser && <>
                    <div className=' ms-auto me-3'>
                        <Tooltip title={AuthUser.role}>
                            <IconButton>
                                <AccountCircleIcon className="text-white" onClick={handleClickOpen} />
                            </IconButton>
                        </Tooltip>
                    </div>

                    <div className='me-3'>
                        <Tooltip title="Logout">
                            <IconButton>
                                <LogoutIcon onClick={handleLogout} className='text-white' />
                            </IconButton>
                        </Tooltip>
                    </div>
                </>
            }
            <AlertDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default TopBar

