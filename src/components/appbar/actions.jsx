import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, Divider } from "@mui/material";
import { MyList, ActionsIconsContainerMobile, ActionsIconsContainerWeb } from "../../styles/appbar";
import { Colors } from "../../styles/theme/index";

export const Actions = ({ matches }) => {

  const Component = matches
  ? ActionsIconsContainerMobile
  : ActionsIconsContainerWeb;
  return (
      <Component>
        <MyList type="row">
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <ShoppingCart />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" variant="middle" flexItem />
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <Favorite />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" variant="middle" flexItem />
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <Person />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
      </Component>
   
  );
};
