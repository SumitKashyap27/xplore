import React from "react";
import { Paper, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Error = ({ message }) => {
  return (
    <Paper
      elevation={3}
      style={{
        position: "fixed",
        bottom: "4px",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "600px", 
        display: "flex",
        alignItems: "center",
        padding: "8px",
        backgroundColor: "#f44336",
      }}
    >
      <ErrorOutlineIcon style={{ marginRight: "8px", color: "#fff" }} />
      <Typography variant="body1" style={{ color: "#fff" }}>
        {message}
      </Typography>
    </Paper>
  );
};

export default Error;
