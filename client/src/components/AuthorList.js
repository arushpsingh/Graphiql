import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { CircularProgress, ListItem, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const getAuthorsQuery = gql`
  {
    authors{
      name
      age
      books{
        name
      }
    }
  }
`

const AuthorList = (props) => {
  function displayAuthors(){
    let data = props.data;
    if(data.loading){
      <CircularProgress />
    }else{
      return data.authors.map((author) => {
        return(
          <Container>
            <ListItem key={author.id}>{author.name}</ListItem>
            <ListItem key={author.id}>{author.age}</ListItem>
          </Container>
        )
      })
    }
  }
  return (
    <Container>
      <Typography variant='h5' sx={{fontWeight: 'bold', mt: '25px'}}>AuthorList</Typography>
      {displayAuthors()}
    </Container>
  )
}

export default graphql(getAuthorsQuery)(AuthorList);