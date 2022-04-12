import React from "react";
import { Box } from "@mui/material";

function SectionBox({ children }) {
  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: "grey",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default SectionBox;
