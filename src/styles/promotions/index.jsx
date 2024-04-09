import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(( { theme } ) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "10px 0px 10px 0px",
    [theme.breakpoints.up('md')]: {
       padding: "20px 0px 20px 0px"
    },
    background: Colors.light_gray
  }));

  export const MessageText = styled(Typography)((  { theme } ) => ({
    fontFamily: '"monsieur-la-doulaise", "cursive"',
    [theme.breakpoints.up('md')]: {
       fontSize: '2rem',
    },
    fontSize: '1rem',
    color: Colors.black
  }));