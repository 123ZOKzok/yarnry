import { ThemeProvider } from '@mui/material/styles';
import { Button, Container } from '@mui/material'
import { useEffect } from 'react'
import theme from './styles/theme';
import Appbar from './components/appbar';


function App() {
 
  useEffect(() => {document.title = "Yarnry - Home"}, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth = "xl"
      sx={{background: '#fff'}}
      >
        <Appbar/>
       <Button variant='contained'> Test </Button>
      </Container>
    </ThemeProvider>
  )
}

export default App;
