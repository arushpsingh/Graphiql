import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import CircularProgress from '@mui/material/CircularProgress';
import { ListItem, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { getBooksQuery } from '../queries/queries';

const BookList = (props) => {
  function displayBooks(){
    let data = props.data;
    if(data.loading){
      <CircularProgress />
    }else{
      return data.books.map((book) => {
        return(
            <ListItem key={book.id}>{book.name}</ListItem>
        );
      })
    }
  }
  return(
    <Container sx={{ display: 'flex', flexDirection: 'column'}}>
      <Typography variant='h5' sx={{fontWeight: 'bold'}}>BookList</Typography>
      {displayBooks()}
    </Container>
  )
}

export default graphql(getBooksQuery)(BookList);