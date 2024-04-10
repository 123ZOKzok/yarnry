import { Stack } from "@mui/material";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddtoCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products/index";
import ProductMeta from "./ProductMeta";
import Share from "@mui/icons-material/Share";
import Favorite from "@mui/icons-material/Favorite";
import FitScreen from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import { useUIContext } from "../../context/ui";
import useCart from "../../hooks/useCart";
import {  useState } from "react";



export default function SingleProduct({ product, matches }) {

  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);
  const { setCart } = useUIContext();

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
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper sx={{ position: "relative" }}>
          <Stack direction="row">
            <ProductFavButton isFav={1}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <Share color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddtoCart onClick={addToCart} variant="contained">{addToCartText}</ProductAddtoCart>
      <ProductDetailDialog product={product} />
    </>
  );
}
