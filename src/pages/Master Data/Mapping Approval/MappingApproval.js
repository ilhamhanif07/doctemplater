import { Grid, Paper } from "@mui/material";
import React from "react";

function MappingApproval() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
          >
            <h1>ini MappingApproval</h1>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MappingApproval;
