import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Input from "@mostrans/web-components/components/base/Input";
import FormGroup from "@mostrans/web-components/components/base/FormGroup";
import Select from "@mostrans/web-components/components/base/Select";

const ModalManage = (props) => {
  const [action, setAction] = useState("Tambah");
  const [inputDocType, setInputDocType] = useState(null);

  return (
    <>
      <Dialog
        open={props.open}
        maxWidth="sm"
        fullWidth
        onClose={props.onClose}
        style={{ overflow: "auto" }}
      >
        <DialogTitle>
          <div className="row">
            <div classNaame="col-md-12">
              <span>{action} Mapping Approval</span>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col-md-12">
              <FormGroup showChildErrorSign isRequired label="Document Type">
                <Select
                  isClearable
                  placeholder="Document Type..."
                  options={props.docType}
                  value={inputDocType}
                  onChange={(e) => setInputDocType(e)}
                />
              </FormGroup>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mt-1">
              <FormGroup showChildErrorSign isRequired label="Jabatan">
                <Select
                  isClearable
                  placeholder="Jabatan..."
                  options={props.dataJabatan}
                  //   value={inputDocType}
                  //   onChange={(e) => setInputDocType(e)}
                />
              </FormGroup>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="danger" onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Tambah
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalManage;
