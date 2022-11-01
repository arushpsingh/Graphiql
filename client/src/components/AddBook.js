import React, { useState } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import AddIcon from '@mui/icons-material/Add';
import { Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { getAuthorsQuery } from '../queries/queries';

const AddBook = (props) => {
  console.log('ok',props.data.authors);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [test,setTest] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) =>{
    // console.log("Aman");
    // console.log("Event",e);
    // console.log(e.target.value);
    setTest(e)
  }

  const handleOpen = () =>{
    setOpen(true);
  };

  const handleClose = () =>{
    setOpen(false);
  };

  function displayAuthors(){
    let data = props.data;
    if(data.loading){
      <CircularProgress />
    }else{
      return data.authors.map(author => {
        return (
          <MenuItem key={author.id}>{author.name}</MenuItem>
        )
      })
    }
  }

  return (
    <form id="add-book" style={{ display: 'flex', flexDirection: 'column'}}>
      <Container>
        <Typography variant='h5' sx={{fontWeight: 'bold', mt: '15px'}}>Add Book</Typography>
      </Container>

      <Container>
        <Typography gutterBottom variant='h6'>BookName:</Typography>
        <TextField id="outlined-basic" label="Enter Book Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
      </Container>

      <Container>
        <Typography gutterBottom variant='h6'>Genre:</Typography>
        <TextField id="outlined-basic" label="Enter Genre" variant="outlined" onChange={(e) => setGenre(e.target.value)}/>
      </Container>

      <Container>
        <Button sx={{ display: 'block', mt: 2, color: 'black', fontWeight: 'bold' }} onClick={handleOpen}>
          Author:
        </Button>

        <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // defaultValue="Select"
            label="Age"
            value={test}
            onChange={(e)=>handleChange(e.target.value)}
            onOpen={handleOpen}
            onClose={handleClose}
            open={open}
            sx={{marginBottom: '20px', minWidth: '160px'}}
          >
            {/* <MenuItem value="">Choose any value</MenuItem> */}
            {console.log(props.data.authors)}
            {/* {displayAuthors()} */}
            {
              !props.data.loading && props.data.authors.map(author => {
                return (
                  <MenuItem key={author.id} value={author.name}>{author.name}</MenuItem>
                )
              })
              
            }
          </Select>
        </FormControl>
      </Container>
      
      <Container>
        <Button variant='contained'>
          <AddIcon />
        </Button>
      </Container>
    </form>
  )
}

export default graphql(getAuthorsQuery)(AddBook);