import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import PersonAddAlt1SharpIcon from '@mui/icons-material/PersonAddAlt1Sharp';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@mui/material';





const Addbtn: React.FunctionComponent<{addbtn:any}> = ({addbtn}) => {
  return(
    <div className='add_icon'>
      <Tooltip title="Add Employee">
  
        <IconButton color="secondary" aria-label="add an alarm" size='large' onClick={()=>{addbtn(true)}}>
        <PersonAddAlt1SharpIcon   />
        </IconButton>
        </Tooltip>

    </div>
  ) ;
};

export default Addbtn;
