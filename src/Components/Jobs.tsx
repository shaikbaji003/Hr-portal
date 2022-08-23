import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';
import './Jobs.css';




const theme = createTheme();


const Jobs: React.FunctionComponent<{newjob:any;}> = ({newjob}) => {
  





  const [title,settitle]=React.useState("")
  const[role,setRole]=React.useState("")
  const[discription,setDiscription]=React.useState("")
  const[jobtype,setType]=React.useState("")
  const[location,setLocation]=React.useState("")
  const [id,setid]=React.useState(Math.random())
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const handleSave=()=>{
    if(title!=="" && role!=="" && discription!=="" && jobtype!=="" && location!==""){

    
    let obj={title,role,discription,jobtype,location,id}
    
    newjob(obj)
    }
    else{
      alert("please fill all elements")
    }

  }
 

  return (
    <div className='job'>

    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <WorkIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Job Vacancy
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Job title"
                  required
                  fullWidth
                  id="job title"
                  label="Job Title"
                  value={title}
                  onChange={(e)=>{settitle(e.target.value)}}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Role"
                  label="Role"
                  name="Job Role"
                  value={role}
                  onChange={(e)=>{setRole(e.target.value)}}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Job Description"
                  name="description"
                  value={discription}
                  onChange={(e)=>{setDiscription(e.target.value)}}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="employee type"
                  label="Employement type"
                  name="employee type"
                  value={jobtype}
                  onChange={(e)=>{setType(e.target.value)}}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Location"
                  label="Location"
                  value={location}
                  onChange={(e)=>{setLocation(e.target.value)}}
                  id="Location"
    
                />
              </Grid>
              
            </Grid>
            <Link to="/viewjob">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{handleSave()}}

            >
              Post
            </Button>
            </Link>
           
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
  );
}
export default Jobs;