import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material";
import NewTask from "../task/newtask";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3F2305",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <IconButton color="primary">
          <AddCircleIcon
            onClick={handleOpen}
            style={{ fontSize: 50 }}
            aria-label="create a new task"
          />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Task
            </Typography>
            <br />
            <NewTask handleClose={handleClose} />
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default ModalForm;
