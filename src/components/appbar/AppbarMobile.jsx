import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Menu from "@mui/icons-material/Menu";
import { Actions } from "./actions";
import { useUIContext } from "../../context/ui";


const AppbarMobile = ({ matches }) => {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Menu />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        Yarnry
      </AppbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <Search />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarMobile;
