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

import CancelIcon from '@mui/icons-material/Cancel';
import { OptionUnstyled } from '@mui/base';
import Tabledata from './Tabledata'
import Contact from "./Contact.json"
import TableJob from './TableJob';



function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Viewjob: React.FunctionComponent<{jobs:any;setJobs:any}> = ({jobs,setJobs}) => {
  




  const [users, setUsers] = React.useState(jobs);
  const [deleteId,setDeleteID]=React.useState(0);
  const [deletemes,setDeleteMes]=React.useState("")
  const deleteid=(id:any)=>{
    setDeleteID(id)

}
React.useEffect(()=>{
    if(deleteId!==0 && deletemes==="no"){
      setDeleteID(0)
        setDeleteMes("")
        console.log("user click on NO")
    }
    if(deleteId!==0 && deletemes==="yes"){
        // setFilteredData(filtedData.filter((e)=>e.id!==deleteId))
        setUsers(users.filter((e:any)=>e.id !==deleteId))
        setJobs(jobs.filter((e:any)=>e.id!==deleteId))
        console.log(users)
        setDeleteID(0)
        
        setDeleteMes("")
        console.log("delete is running"+deleteId+deletemes)
    }
},[deleteId]) 



  return (
    <TableContainer component={Paper} className='table_contact'>
      <Table sx={{ minWidth: 550 }} aria-label='simple table'>
        <TableHead>
          <TableRow className='table_row_nav'>    
            <TableCell>Title</TableCell>
            
            <TableCell align='center'>Role</TableCell>
            <TableCell align='center'>Job Type</TableCell>
            <TableCell align='center'>Location</TableCell>
            <TableCell align='center'>discription</TableCell>

            <TableCell align='center'>options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user:any) => {
           return <TableJob deleteid={deleteid} deletemes={setDeleteMes} contact={user}/>
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Viewjob;