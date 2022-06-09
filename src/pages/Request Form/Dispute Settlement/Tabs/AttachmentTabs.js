import React, { useState } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mostrans/web-components/components/base/Table";
import ModalAttachment from "../ModalAttachment";

export default function AttachmentTabs() {
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => {
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
    },
  };
  return (
    <div>
      <ModalAttachment
        isOpen={modalShow}
        onRequestClose={handleClose}
        style={customStyles}
      />
      <Grid className="form-group">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleShow()}
          className={"mb-1"}
        >
          Add Attachment
        </Button>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Description</th>
              <th>Date</th>
              <th>File Name</th>
              <th>Type</th>
            </tr>
          </thead>
        </Table>
      </Grid>
    </div>
  );
}
