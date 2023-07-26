import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { createTheme, ThemeProvider } from "@mui/material";
import ModalForm from "./modalform";

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
        Create New
        <ModalForm />
        <br />
        Delete
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
