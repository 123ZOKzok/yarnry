import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material'
import { useEffect } from 'react'
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Product from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';


function App() {
 
  useEffect(() => {document.title = "Yarnry - Home"}, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth = "xl"
      sx={{background: '#fff'}}
      >
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <SearchBox/>
          <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant='h4'>Our Products</Typography>
          </Box>
          <Product />
          <Footer />
          <AppDrawer />
        </UIProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App;
