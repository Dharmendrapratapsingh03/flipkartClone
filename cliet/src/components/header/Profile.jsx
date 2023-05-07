import { useState } from 'react';
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import  PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
   font-size: 14px;
   margin-left: 20px;
`

const Profile = ({ account, setAccount }) => {
    const [open, setopen] = usestate(false);

    const handleclick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logoutUser = () =>{
         setAccount('');
    }
    return(
        <>
          <Box onclick={handleclick}><Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography></Box>
          <Component

            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
           
            >
            <MenuItem onClick= {() => {handleClose(); logoutUser(); }}>
                <PowerSettingsNewIcon color="primary" fontsize="small"/>
                <Logout>Logout</Logout>
            </MenuItem>
          
            </Component>
         </>
    )
}

export default Profile;