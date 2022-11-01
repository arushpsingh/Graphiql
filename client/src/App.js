import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Container } from '@mui/material';
import AddBook from './components/AddBook';
import AuthorList from './components/AuthorList';
import BookList from "./components/BookList";


//apolo-client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container sx={{ display: 'flex'}}>
        <BookList />
        <AddBook />
        {/* <AuthorList /> */}
      </Container>
    </ApolloProvider>
  );
}

export default App;
