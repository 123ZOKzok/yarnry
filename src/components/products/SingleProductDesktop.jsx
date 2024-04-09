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
import { useState } from "react";

export default function SingleProductDesktop({ product, matches }) {

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
            show={showOptions}
            variant="contained"
          >
            Add to Cart
          </ProductAddtoCart>
        )}
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper  show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <Share color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
    </>
  );
}
