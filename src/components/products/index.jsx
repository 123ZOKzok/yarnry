import { useMediaQuery, useTheme } from "@mui/material";
import products from "../../data/index";

export default function Product() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map(
    products => (
        <Grid item key={products.id} display="flex" flexDirection="column" alignItems="center">

        </Grid>
    )
  )
  return (
    <Container>
        <Grid
        container
        justifyContent={"center"}
        sx={{margin: "20px 4px 10px 4px"}}
        >
            {renderProducts}
        </Grid>
    </Container>
  );
}
