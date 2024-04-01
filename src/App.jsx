import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material'
import { useEffect } from 'react'
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';


function App() {
 
  useEffect(() => {document.title = "Yarnry - Home"}, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth = "xl"
      sx={{background: '#fff'}}
      >
        <Appbar />
        <Banner />
      </Container>
    </ThemeProvider>
  )
}

export default App;
