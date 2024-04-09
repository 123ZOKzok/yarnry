import { Box, IconButton, List, Typography, styled } from "@mui/material";
import { Colors, DrawerWidth } from "../theme";
import '@fontsource/monsieur-la-doulaise';

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  alignItems: "center",
  padding: "2px 8px",
  justifyContent: "center"
}));

export const AppbarHeader = styled(Typography)(() => ({
  fontSize: "3em",
  flexGrow: 1,
  fontFamily: '"monsieur-la-doulaise", "cursive"',
  padding: "4px",
  color: Colors.secondary
}));


export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  alignItems: "center",
  justifyContent: "center"
}));

export const ActionsIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  left: 0,
  bottom: 0,
  position: 'fixed',
  width: '100%',
  alignItems: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`
}));

export const ActionsIconsContainerWeb = styled(Box)(() => ({
  flexGrow: 0
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,      
}));

