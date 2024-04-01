import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(( { theme } ) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: '20px 0px 20px 0px',
    [theme.breakpoints.up('md')]: {
       padding: '40px 0px 40px 0px'
    }
  }));

  export const MessageText = styled(Typography)((  { theme } ) => ({
    fontFamily: '"monsieur-la-doulaise", "cursive"',
    [theme.breakpoints.up('md')]: {
       fontSize: '3rem',
    },
    fontSize: '1.5rem',
    background: Colors.light_gray
  }));