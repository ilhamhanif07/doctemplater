import React, { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import Input from "@mostrans/web-components/components/base/Input";
import Select from "react-select";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FloatingButtonMostrans from "../../../components/GeneralComponent/FloatingButtonMostrans";
import DataTable from "@mostrans/web-components/components/advanced/DataTable";
import CreateNewAgreement from "./CreateNewAgreement";
import TabAgreement from "./TabAgreement";
import DateRangePicker from "@mostrans/web-components/components/advanced/DateRangePicker";
import { GetTransporterAgreement } from "../../../GQL/query"

function Deeds() {
  const client = useApolloClient();
  const [modalShowAdd, setModalShowAdd] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const query = await GetTransporterAgreement(client);
    // console.log(query.getDisputeSettlement.data, "fetcData");
    setData(query.getTransporterAgreement.data);
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
          <CreateNewAgreement
            isClose={() => {
              setModalShowAdd(false);
            }}
          />
        ) : (
          <>
            <h1>Agreement Transporter</h1>

            <TabAgreement />

            <Grid container className="pt-1">
              <Grid md={3} className="pl-1 pr-1">
                <label className="control-label">Filter Nomor Dokumen</label>
                <Input
                  className={"w-100"}
                  // onChange={}
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
              data={data}
              hasPagination={true}
              columns={[
                {
                  getCellKey: (data) => data.id,
                  selector: "id",
                  sortBy: "id",
                  header: "Nama Perusahaan",
                  sortable: true,
                  position: "center",
                },
                {
                  // getCellKey: (data) => data,
                  selector: "",
                  sortBy: "",
                  header: "Nama Direktur",
                  sortable: true,
                  position: "center",
                },
                {
                  // getCellKey: (data) => data,
                  selector: "",
                  sortBy: "",
                  header: "Jabatan",
                  sortable: true,
                  position: "center",
                },
                {
                  getCellKey: (data) => data.management_fee_persen,
                  selector: "management_fee_persen",
                  sortBy: "management_fee_persen",
                  header: "Management Fee",
                  sortable: true,
                  position: "center",
                },
                {
                  getCellKey: (data) => data.signature_date,
                  selector: "signature_date",
                  sortBy: "signature_date",
                  header: "Start Date",
                  sortable: true,
                  position: "center",
                  renderCell: (row) => (
                    <div>
                      <p>{generateDate(row.signature_date)}</p>;
                    </div>
                  ),
                },
                {
                  getCellKey: (data) => data.expiry_date,
                  selector: "expiry_date",
                  sortBy: "expiry_date",
                  header: "End Date",
                  sortable: true,
                  position: "center",
                  renderCell: (row) => (
                    <div>
                      <p>{generateDate(row.expiry_date)}</p>;
                    </div>
                  ),
                },
                {
                  getCellKey: (data) => data.create_date,
                  selector: "create_date",
                  sortBy: "create_date",
                  header: "Create Date",
                  sortable: true,
                  position: "center",
                  renderCell: (row) => (
                    <div>
                      <p>{generateDate(row.create_date)}</p>;
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

export default Deeds;
