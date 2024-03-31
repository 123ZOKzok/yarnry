import { Button, Container } from '@mui/material'
import { useEffect } from 'react'

function App() {
 
  useEffect(() => {document.title = "Yarnry - Home"}, []);

  return (
    <Container 
    maxWidth = "xl"
    sx={{background: '#fff'}}
    >
      
     <Button variant='contained'> Test </Button>
    </Container>
  )
}

export default App
