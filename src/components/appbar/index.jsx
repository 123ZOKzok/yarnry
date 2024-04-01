import { useMediaQuery, useTheme } from '@mui/material';
import AppbarMobile from '../../components/appbar/AppbarMobile';
import { AppbarWeb } from '../../components/appbar/AppbarWeb';

function AppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {matches ? (<AppbarMobile  matches={matches} /> ): ( <AppbarWeb  matches={matches}/> )}
    </>
  );
}

export default AppBar;



