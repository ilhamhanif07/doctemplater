import React, { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import { Paper } from "@mui/material";
import DataTable from "@mostrans/web-components/components/advanced/DataTable";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import Input from "@mostrans/web-components/components/base/Input";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FloatingButtonMostrans from "../../../components/GeneralComponent/FloatingButtonMostrans";
import Select from "react-select";
import DateRangePicker from "@mostrans/web-components/components/advanced/DateRangePicker";
import ModalAdd from "./ModalAdd";
import { GetDisputeSettlement } from "../../../GQL/query";

function DisputeSettlement() {
  const client = useApolloClient();
  const [data, setData] = useState([]);
  const [searchNoDokumen, setSearchNoDokumen] = useState("");
  const [modalShowAdd, setModalShowAdd] = useState(false);

  const fetchData = async () => {
    const query = await GetDisputeSettlement(client);
    // console.log(query.getDisputeSettlement.data, "fetcData");
    setData(query.getDisputeSettlement.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function generateDate(tanggal) {
    var date = new Date(parseInt(tanggal));
    var datefix = date.toLocaleString("en-GB", { hour12: false });

    return datefix;
  }

  return (
    <React.Fragment>
      <Paper sx={{ p: 2 }}>
        {modalShowAdd ? (
          <ModalAdd
            isClose={() => {
              setModalShowAdd(false);
            }}
          />
        ) : (
          <>
            <h1>List Of Dispute Settlement Request</h1>
            <Grid container className="pt-1">
              <Grid md={3} className="pl-1 pr-1">
                <label className="control-label">Filter Nomor Dokumen</label>
                <Input
                  className={"w-100"}
                  onChange={async (e) =>
                    await setSearchNoDokumen(e.target.value)
                  }
                  type="text"
                  placeholder={"Nomor Dokumen"}
                />
              </Grid>
              <Grid md={3} className="pr-1">
                <label className="control-label">Filter SBU</label>
                <Select
                  name="form-field-name"
                  options={[]}
                  placeholder="Pilih Entity / SBU"
                />
              </Grid>
              <Grid md={3} className="pr-1">
                <label className="control-label">Filter Tipe Dokumen</label>
                <Select
                  name="form-field-name"
                  options={[]}
                  placeholder="Pilih Tipe Dokumen"
                />
              </Grid>
              <Grid md={2} className="pr-1">
                <label className="control-label">Tanggal Dokumen</label>
                <DateRangePicker />
              </Grid>
              <Grid md={1} className="pr-0">
                <label className="control-label">Advanced</label>
                <br />
                <Button variant="contained" color="primary">
                  <FilterAltIcon />
                </Button>
              </Grid>
            </Grid>
            <hr />
            <DataTable
              data={data?.filter((element, index) => {
                var boolData = true;
                var request_number =
                  element.header.request_number?.toLowerCase();

                if (
                  searchNoDokumen != "" &&
                  searchNoDokumen != null &&
                  !request_number.includes(searchNoDokumen.toLocaleLowerCase())
                ) {
                  boolData = false;
                }

                return boolData;
              })}
              // getRowKey={data}
              hasPagination={true}
              columns={[
                {
                  getCellKey: (data) => data.header?.request_number,
                  selector: "header.request_number",
                  sortBy: "header.request_number",
                  header: "Request No",
                  sortable: true,
                  position: "center",
                },
                {
                  getCellKey: (data) =>
                    data.header?.documentType?.document_type_name,
                  selector: "header.documentType.document_type_name",
                  sortBy: "header.documentType.document_type_name",
                  header: "Type",
                  sortable: true,
                  position: "center",
                },
                {
                  getCellKey: (data) =>
                    data.header?.requestStatus?.request_status_name,
                  selector: "header.requestStatus.request_status_name",
                  sortBy: "header.requestStatus.request_status_name",
                  header: "Status",
                  sortable: true,
                  position: "center",
                },
                {
                  getCellKey: (data) => data.header?.create_date,
                  selector: "header.create_date",
                  sortBy: "header.create_date",
                  header: "Create Date",
                  sortable: true,
                  position: "center",
                  renderCell: (row) => (
                    <div>
                      <p>{generateDate(row.header.create_date)}</p>;
                    </div>
                  ),
                },
                {
                  getCellKey: (data) => data.header?.requestor?.employee_name,
                  selector: "header.requestor.employee_name",
                  sortBy: "header.requestor.employee_name",
                  header: "Type",
                  sortable: true,
                  position: "center",
                  header: "Requestor",
                  sortable: true,
                  position: "center",
                },
                {
                  getCellKey: (data) => data.header?.requestor?.employee_name,
                  selector: "header.requestor.employee_name",
                  sortBy: "header.requestor.employee_name",
                  header: "Legal PIC",
                  sortable: true,
                  position: "center",
                },
                {
                  header: "Action",
                  sortable: true,
                  fixedRight: true,
                  position: "center",
                  renderCell: (row) => (
                    <div>
                      <IconButton
                        variant="contained"
                        color="danger"
                        style={{ margin: "0 10px" }}
                      >
                        {<DeleteIcon />}
                      </IconButton>
                    </div>
                  ),
                },
              ]}
            />
            <FloatingButtonMostrans
              title={"+"}
              tooltip={"Create New IP Request"}
              callback={() => {
                setModalShowAdd(true);
              }}
            />
          </>
        )}
      </Paper>
    </React.Fragment>
  );
}

export default DisputeSettlement;
