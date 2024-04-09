import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material";
import { Colors } from "../theme";
import { slideInBottom, slideInRight } from "../../animations";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
 
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  background: Colors.light_gray,
  width: "100%",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton, {
  shouldForwardProp: (prop) => prop !== "isFav",
})(({ isFav, theme }) => ({
  color: isFav ? Colors.primary : Colors.light,
  [theme.breakpoints.down("md")]: {
    position: "relative",
    right: 0,
    top: 0,
  },
}));

export const ProductAddtoCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
  },
  background: Colors.secondary,
  opacity: 0.9,
  animation:
    show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.450, 0.940) both`,
}));

export const ProductActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",})(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    right: 0,
    top: "20%",
    animation:
      show &&
      `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));
