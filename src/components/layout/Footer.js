import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Mostrans Legal Platform {new Date().getFullYear()}
      {"."} All rights reserved | Version 1.0.0
    </Typography>
  );
}

export default Footer;
