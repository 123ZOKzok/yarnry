import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
  BannerShopButton,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
        <BannerImage src="./images/img7.jpg"/>
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle>Blankets</BannerTitle>
        <BannerDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illo
          necessitatibus facere aliquid qui placeat laudantium molestiae saepe
          repudiandae repellat magni explicabo consectetur sint eum amet aperiam
          consequuntur. Rem, hic.
        </BannerDescription>
        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
