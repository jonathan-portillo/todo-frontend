import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { createTheme, ThemeProvider } from "@mui/material";

const SideNav = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3F2305",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="sidenavbox">
        <IconButton color="primary">
          <AddCircleIcon
            style={{ fontSize: 50 }}
            aria-label="create a new task"
          />
        </IconButton>
        <br />
        <IconButton color="primary">
          <RemoveCircleIcon style={{ fontSize: 50 }} aria-label="delete tasks">
            Delete Tasks
          </RemoveCircleIcon>
        </IconButton>
      </div>
    </ThemeProvider>
  );
};

export default SideNav;
