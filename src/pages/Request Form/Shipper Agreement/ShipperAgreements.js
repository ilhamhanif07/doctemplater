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
import { GetShipperAgreement } from "../../../GQL/query";
import { insertShipperAgreement } from "../../../GQL/mutation";
import { useRecoilState } from "recoil";
import { dataModalShipper } from "./BaseRecoil";

function ShipperAgreements() {
  const client = useApolloClient();
  const [modalShowAdd, setModalShowAdd] = useState(false);
  const [data, setData] = useState([]);
  const [tabCount, setTabCount] = useState({});
  const [statusFilter, setStatusFilter] = useState(1);
  const [dataModal, setDataModal] = useRecoilState(dataModalShipper);
  const [mode, setMode] = useState(0);

  const fetchData = async () => {
    const query = await GetShipperAgreement(client);
    const data = query.getShipperAgreement.data;

    const countTab = {
      draft: 0,
      wfApp: 0,
      wfAck: 0,
      wfView: 0,
      wfCon: 0,
      wfFin: 0,
      done: 0,
      wfRev: 0,
      rejected: 0,
    };
    data.forEach((item) => {
      switch (String(item.status.id)) {
        case "1":
          countTab.draft++;
          break;
        case "2":
          countTab.wfApp++;
          break;
        case "3":
          countTab.wfAck++;
          break;
        case "4":
          countTab.wfView++;
          break;
        case "5":
          countTab.wfCon++;
          break;
        case "6":
          countTab.wfFin++;
          break;
        case "7":
          countTab.done++;
          break;
        case "8":
          countTab.wfRev++;
          break;
        case "9":
          countTab.rejected++;
          break;
      }
    });
    setTabCount(countTab);
    setData(query.getShipperAgreement.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeTab = (tab) => {
    setStatusFilter(String(tab));
  };

  function generateDate(tanggal) {
    var date = new Date(parseInt(tanggal));
    var datefix = date.toLocaleString("en-GB", { hour12: false });

    return datefix;
  }

  const handleShowDetail = (e, row) => {
    setDataModal(row);
    setModalShowAdd(true);
  };

  return (
    <React.Fragment>
      <Paper sx={{ p: 2 }}>
        {modalShowAdd ? (
          <CreateNewAgreement
            fetchDataListing={fetchData}
            isClose={() => {
              setModalShowAdd(false);
            }}
            mode={mode}
          />
        ) : (
          <>
            <h1>Agreement Shipper</h1>

            <TabAgreement handleChangeTab={handleChangeTab} counts={tabCount} />

            <Grid container className="pt-1 d-flex justify-content-between">
              <Grid md={3} className="pl-1 pr-1">
                <label className="control-label">Search</label>
                <Input
                  className={"w-100"}
                  // onChange={}
                  type="text"
                  placeholder={"Search..."}
                />
              </Grid>

              <Grid md={3} className="pr-1">
                <label className="control-label">Tanggal Dokumen</label>
                <div className="w-100 form-group">
                  <DateRangePicker />
                </div>
              </Grid>
            </Grid>
            <hr />

            <DataTable
              data={data.filter((item) => {
                let flt1 = false;

                if (String(item.status.id) === statusFilter) {
                  flt1 = true;
                }

                return flt1;
              })}
              hasPagination={true}
              columns={[
                {
                  getCellKey: (data) => data?.document_number,
                  selector: "document_number",
                  sortBy: "document_number",
                  header: "Nomor Dokumen",
                  sortable: true,
                  position: "center",
                },
                {
                  getCellKey: (data) => data?.shipper?.nama_shipper,
                  selector: "shipper.nama_shipper",
                  sortBy: "shipper.nama_shipper",
                  header: "Nama Shipper",
                  sortable: true,
                  position: "center",
                },
                {
                  getCellKey: (data) => data?.shipperDetail?.nama_pic,
                  selector: "shipperDetail.nama_pic",
                  sortBy: "shipperDetail.nama_pic",
                  header: "Nama PIC",
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
                {
                  getCellKey: (data) => data?.shipper?.active,
                  selector: "shipper.active",
                  sortBy: "shipper.active",
                  header: "Status",
                  sortable: true,
                  position: "center",
                  renderCell: (row) =>
                    row.active === "A" ? (
                      <Button variant="contained" color="primary">
                        Active
                      </Button>
                    ) : (
                      <Button variant="contained" color="danger">
                        Inactive
                      </Button>
                    ),
                },
                {
                  header: "Action",
                  position: "center",
                  renderCell: (row) => (
                    <>
                      {row.status.id == 1 ? (
                        <Button
                          variant="text"
                          color="primary"
                          onClick={(e) => {
                            handleShowDetail(e, row);
                            setMode(2);
                          }}
                        >
                          Edit
                        </Button>
                      ) : (
                        <Button
                          variant="text"
                          color="primary"
                          onClick={(e) => {
                            handleShowDetail(e, row);
                            setMode(3);
                          }}
                        >
                          Detail
                        </Button>
                      )}
                    </>
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

export default ShipperAgreements;
