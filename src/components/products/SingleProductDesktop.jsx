import { Box, Button, IconButton, Stack, styled } from "@mui/material";
import { Colors } from "../../styles/theme";
import { slideInBottom, slideInRight } from "../../animations";
import ProductMeta from "./ProductMeta";
import Share from "@mui/icons-material/Share";
import Favorite from "@mui/icons-material/Favorite";
import FitScreen from "@mui/icons-material/FitScreen";
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import useCart from "../../hooks/useCart";
import { useUIContext } from "../../context/ui";

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
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(({ isFav, theme }) => ({
  color: isFav ? Colors.primary : Colors.light,
  position: "absolute", 
  top: 0,
  right: 0, 
}));

export const ProductAddtoCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  position: "absolute", 
  bottom: "2%",
  padding: "10px 5px",
  background: Colors.secondary,
  opacity: 0.9,
  animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.450, 0.940) both`,
}));

export const ProductActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  position: "absolute", 
  display: show ? "visible" : "none",
  right: 0,
  top: "20%",
  animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}));


export default function SingleProductDesktop({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
  useDialogModal(ProductDetail);
  // const { setCart } = useUIContext();
    
  const { addToCart, addToCartText } = useCart(product);
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
              <Favorite />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductAddtoCart
            onClick={addToCart}
            show={showOptions}
            variant="contained"
          >
          {addToCartText}
          </ProductAddtoCart>
        )}
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper  show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <Share color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductDetailDialog product={product} />
    </>
  );
}
