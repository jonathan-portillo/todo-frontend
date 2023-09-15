import React, { useEffect } from "react";
import { connect } from "react-redux";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { createTheme, ThemeProvider } from "@mui/material";
import ModalForm from "./modalform";
import { setEnableDelete } from "../../actions/todoActions";

const SideNav = (props) => {
  const { enableDelete, setEnableDelete } = props;

  useEffect(() => {
    console.log("state", enableDelete); // Log the updated enableDelete value
  }, [enableDelete]);

  const handleClickDelete = (e) => {
    e.preventDefault();
    setEnableDelete(true);
  };

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
        <IconButton onClick={handleClickDelete} color="primary">
          <RemoveCircleIcon style={{ fontSize: 50 }} aria-label="delete tasks">
            Delete Tasks
          </RemoveCircleIcon>
        </IconButton>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  enableDelete: state.enableDelete, // Map enableDelete from Redux state
});

export default connect(mapStateToProps, { setEnableDelete })(SideNav);
