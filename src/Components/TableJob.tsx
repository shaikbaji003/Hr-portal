import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, CardContent, Fab, TextField, Tooltip, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { OptionUnstyled } from '@mui/base';
import EditIcon from '@mui/icons-material/Edit';
import DeletePopup from './DeletePopup';


const TableJob: React.FunctionComponent<{contact:any;deletemes:any;deleteid:any}> = ({contact,deletemes,deleteid}) => {
    const [options,setOptions]=React.useState(false)
    const [editopt,setEditOpt]=React.useState(false)
    // const [deletemes,setDeleteMes]=React.useState("")
    const [name,setname]=React.useState(contact.title)
    const [email,setEmail]=React.useState(contact.role)
    const[address,setAddress]=React.useState(contact.jobtype)
    const [phone,setPhoen]=React.useState(contact.location)
    const [website,setWebsite]=React.useState(contact.discription)
    const deleteFunc=(id:number)=>{
      deleteid(id)
      setOptions(false)
      
    }
    let arr=[deleteFunc,contact.id]
    const savedata=()=>{
      contact["title"]=name
      contact["role"]=email
      contact["jobtype"]=address
      contact["location"]=phone
      contact["discription"]=website
      setOptions(false)
        setEditOpt(false)
    }
  return(
    <>
         {editopt===false && <TableRow
        key={contact.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {editopt ===false && <TableCell component='th' scope='row'>
          {contact.title}
         
        </TableCell>}
        {/* {editopt &&   <input type='text' value={contact.name  }></input> } */}
        <TableCell align='center'>{contact.role}</TableCell>
        <TableCell align='center'>{contact.jobtype}</TableCell>
        <TableCell align='center'>{contact.location}</TableCell>
        <TableCell align='center'>{contact.discription}</TableCell>
        {/* <TableCell align='center' >{contact.discription}</TableCell> */}
        <TableCell align='center'>
        {options ===false && <IconButton aria-label="settings" onClick={()=>{setOptions(true)}} >
        <Tooltip title='More options'>          

            <MoreVertIcon />
            </Tooltip>

          </IconButton>}
        {options && <div><IconButton aria-label="settings" onClick={()=>{setOptions(false)}}>
          <Tooltip title='Cancle'>
          <CancelIcon/>

          </Tooltip>
          
          </IconButton>
          {editopt===false && <div className='options' >
            <Fab color="secondary" size="small" aria-label="edit" onClick={()=>{setEditOpt(true)}} >
              <Tooltip title='Edit'>
              <EditIcon />
              </Tooltip>
            </Fab>
            <DeletePopup deleteMes={deletemes} arr={arr} />            
            </div>}
           
          </div>}
        </TableCell>
      </TableRow>}
      {editopt &&
      <TableRow>
        <TableCell>
          <TextField value={name} onChange={(e)=>{setname(e.target.value)}}></TextField>
        </TableCell>
        <TableCell>
          <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}}></TextField>
        </TableCell>
        <TableCell>
          <TextField value={address} onChange={(e)=>{setAddress(e.target.value)}}></TextField>
        </TableCell>
        <TableCell>
          <TextField value={phone} onChange={(e)=>{setPhoen(e.target.value)}}></TextField>
        </TableCell>
        <TableCell>
          <TextField value={website} onChange={(e)=>{setWebsite(e.target.value)}}></TextField>
        </TableCell>  
        <Button variant='contained' onClick={()=>{savedata()}}>save</Button>
      </TableRow>
    
      }
      </>
  ) ;
};

export default TableJob;
