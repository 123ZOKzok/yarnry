import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import { Actions } from "./actions";
import { useUIContext } from "../../context/ui";

export const AppbarWeb = ({ matches }) => {

  const { setShowSearchBox } = useUIContext();
 
  return (
   
      <AppbarContainer>
        <AppbarHeader>Yarnry</AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
          <ListItemText primary="Contact Us" />
          <ListItemButton  onClick={() => setShowSearchBox(true)}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
        <Actions matches={matches} />
      </AppbarContainer>
  
  );
};
