import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Dropzone from "@mostrans/web-components/components/base/Dropzone";
import { Grid } from "@mui/material";
import Input from "@mostrans/web-components/components/base/Input";
import Button from "@mui/material/Button";

export default function ModalAttachment({ isOpen, onRequestClose, style }) {
  const [invalidMsg, setInvalidMsg] = useState([]);
  const [files, setFiles] = useState([]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={style}
        ariaHideApp={false}
      >
        <h5 style={{ marginBottom: "10px" }}>Upload File Attachment</h5>
        <Dropzone
          onChange={(files) => setFiles(files)}
          accept=".docx"
          onInvalid={(invalidMessage) => setInvalidMessage(invalidMessage)}
          middleText={"Klik / Geser Lampiran anda disini!"}
        />

        <Grid className="mt-1">
          <label className="control-label">Description</label>
          <Input
            style={{ minHeight: "200px" }}
            className={"w-100 mb-1"}
            multiline
            onChange={(e) => {}}
            type="text"
          />
        </Grid>

        <div>
          <Button
            variant="contained"
            color="danger"
            onClick={onRequestClose}
            className={"mr-1"}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onRequestClose}
            className={"mr-1"}
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
}
