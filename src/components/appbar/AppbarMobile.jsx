import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Menu from "@mui/icons-material/Menu";
import { Actions } from "./actions";


const AppbarMobile = ({ matches }) => {
  return (
    <AppbarContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        Yarnry
      </AppbarHeader>
      <IconButton>
        <Search />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarMobile;
