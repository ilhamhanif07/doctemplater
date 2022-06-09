import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Select from "react-select";
import Input from "@mostrans/web-components/components/base/Input";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import DateRangePicker from "@mostrans/web-components/components/advanced/DateRangePicker";
import TabsDispute from "./Tabs/TabsDispute";
import {
  GetUserCompany,
  GetDocumentSubTypeByDocumentTypeId,
} from "../../../GQL/query";
import { useApolloClient } from "@apollo/client";

export default function ModalAdd(props) {
  const client = useApolloClient();
  const [dataSBU, setDataSBU] = useState([]);
  const [dataDisputeOptions, setDataDisputeOptions] = useState([]);
  const [selectType, setSelectType] = useState("");

  const option = [
    { label: "New", value: "New" },
    { label: "Continuation", value: "Continuation" },
  ];

  const fetchDataSBU = async () => {
    const query = await GetUserCompany(client);
    setDataSBU(query.getUserCompany.data);
  };

  useEffect(() => {
    fetchDataSBU();
  }, []);

  let optionsDataSBU = dataSBU?.map((el) => {
    return { value: el.id, label: el.company_name };
  });

  const fetchDataDisputeOptions = async () => {
    const query = await GetDocumentSubTypeByDocumentTypeId(client, "6");
    setDataDisputeOptions(query.getDocumentSubTypeByDocumentTypeId.data);
  };

  useEffect(() => {
    fetchDataDisputeOptions();
  }, []);

  let optionsDataDisputeOptions = dataDisputeOptions?.map((el) => {
    return { value: el.id, label: el.document_subtype_name };
  });

  return (
    <div>
      <h1 style={{ marginBottom: "10px" }}>
        Create Dispute Settlement Request
      </h1>
      <Grid container>
        <Grid md={3} className="text-right pt-1">
          <div style={{ display: "flex" }}>
            <Button
              variant="contained"
              color="danger"
              startIcon={<ArrowBackIosIcon />}
              onClick={() => props.isClose()}
              className="mr-1"
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="info"
              startIcon={<SaveIcon />}
              className="mr-1"
              onClick={() => props.isClose()}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<CheckIcon />}
              onClick={() => props.isClose()}
              className="mr-1"
            >
              Submit
            </Button>
          </div>
        </Grid>
        <Grid className="pt-1" style={{ marginLeft: "52%" }}>
          <h3>Document Status</h3>
        </Grid>
      </Grid>

      <hr />

      <Grid container className="mb-1">
        <Grid md={6} className={"pr-1"}>
          <label className="control-label">SBU For Approval</label>
          <Select
            name="form-field-name"
            options={optionsDataSBU}
            placeholder="Pilih Entity / SBU"
          />
        </Grid>
        <Grid md={6}>
          <label className="control-label">Request Number</label>
          <Input
            className={"w-100"}
            disabled={true}
            onChange={(e) => {}}
            type="text"
            placeholder={"Nomor Dokumen"}
          />
        </Grid>
      </Grid>

      <Grid container className="mb-1">
        <Grid md={6} className={"pr-1"}>
          <label className="control-label">Type</label>
          <Select
            name="form-field-name"
            options={option}
            onChange={(e) => {
              setSelectType(e.value);
            }}
            placeholder="Pilih Type"
          />
        </Grid>

        <Grid md={6}>
          <label className="control-label">Requestor</label>
          <Input
            className={"w-100"}
            disabled={true}
            onChange={(e) => {}}
            type="text"
            placeholder={"Nama Requestor"}
          />
        </Grid>
      </Grid>

      {selectType == "New" ? (
        <Grid md={6} className={"pr-1"}>
          <label className="control-label">Dispute</label>
          <Select
            name="form-field-name"
            options={optionsDataDisputeOptions}
            placeholder="Pilih Dispute"
          />
        </Grid>
      ) : selectType == "Continuation" ? (
        <Grid>
          <label className="control-label">Existing Library</label>
          <Select
            name="form-field-name"
            options={[]}
            placeholder="Pilih Entity / SBU"
          />
        </Grid>
      ) : null}

      <Grid>
        <label className="control-label">Chronologies</label>
        <Input
          style={{ minHeight: "200px" }}
          className={"w-100 mb-1"}
          multiline
          onChange={(e) => {}}
          type="text"
        />
      </Grid>
      <Grid>
        <label className="control-label">Expected Date of Finalization</label>
        <div>
          <DateRangePicker />
        </div>
      </Grid>
      <Grid>
        <label className="control-label">Entity of Dispute</label>
        <Input
          className={"w-100"}
          onChange={(e) => {}}
          type="text"
          placeholder={"Entity Dispute"}
        />
      </Grid>
      <TabsDispute />
    </div>
  );
}
