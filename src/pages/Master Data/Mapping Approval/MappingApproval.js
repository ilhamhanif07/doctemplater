import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";

import { Collapse, Paper } from "@mui/material";
import Input from "@mostrans/web-components/components/base/Input";
import DataTable from "@mostrans/web-components/components/advanced/DataTable";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { ToastContainer, toast } from "react-toastify";
import Tabs, {
  TabItem,
  TabItemBadge,
} from "@mostrans/web-components/components/base/Tabs";
import Select from "@mostrans/web-components/components/base/Select";

import ModalManage from "./ModalManage";

import {
  getDocumentSubType,
  getDocumentType,
  getMappingApproval,
  getUserCompany,
  getJabatan,
} from "../../../GQL/query";

function MappingApproval() {
  const column = [
    {
      getCellKey: (data) => data.document_type_name,
      selector: "document_type_name",
      header: "Document Subtype",
      sortBy: "document_type_name",
      sortable: true,
      position: "center",
    },
    {
      getCellKey: (data) => data.level,
      selector: "level",
      header: "Level",
      sortBy: "level",
      sortable: true,
      position: "center",
    },
    {
      getCellKey: (data) => data.position_name,
      selector: "position_name",
      header: "Position Name",
      sortBy: "position_name",
      sortable: true,
      position: "center",
    },
    {
      getCellKey: (data) => data.company_name,
      selector: "company_name",
      header: "Company Name",
      sortBy: "company_name",
      sortable: true,
      position: "center",
    },
    {
      header: "Action",
      fixedRight: true,
      position: "center",
      renderCell: (data) => (
        <Button variant="text" color="primary">
          Edit
        </Button>
      ),
    },
  ];

  const client = useApolloClient();
  const [dataTable, setDataTable] = useState([]);
  const [docType, setDocType] = useState([]);
  const [userCompany, setUserCompany] = useState([]);
  const [dataJabatan, setDataJabatan] = useState([]);
  const [fltDocType, setFltDocType] = useState(null);
  const [fltLevel, setFltLevel] = useState(null);
  const [fltSearch, setFltSearch] = useState(null);
  const [fltJabatan, setFltJabatan] = useState(null);
  const [fltUserCompany, setFltUserCompany] = useState(null);
  const [isCollapse, setIsCollapse] = useState(false);
  const [openModalManage, setOpenModalManage] = useState(false);

  const fetchMappingApproval = async () => {
    const res = await getMappingApproval(client);
    const arr = [];

    if (res.response.status === "000") {
      res.data.forEach((el, index) => {
        arr.push({
          id: el?.id,
          document_type_id: el?.documentType?.id,
          document_type_name: el?.documentType?.document_type_name,
          level: el?.level,
          position_id: el?.jabatan?.id,
          position_name: el?.jabatan?.position_name,
          company_id: el?.sbu?.id,
          company_name: el?.sbu?.company_name,
          company_alias: el?.sbu?.company_alias,
        });
      });

      setDataTable(arr);
    } else {
      toast.error("Gagal Fetch Data");
    }
  };

  const fetchDataDocType = async () => {
    const res = await getDocumentType(client);
    const arr = [];

    if (res.response.status === "000") {
      res.data.forEach((el, index) => {
        arr.push({
          label: el.document_type_name,
          value: el.id,
        });
      });

      setDocType(arr);
    } else {
      toast.error("Gagal Fetch Document Type");
    }
  };

  const fetchDataUserCompany = async () => {
    const res = await getUserCompany(client);
    const arr = [];

    if (res.response.status === "000") {
      res.data.forEach((el, index) => {
        arr.push({
          label: `${el?.company_name} (${el?.company_alias})`,
          value: el.id,
        });
      });

      setUserCompany(arr);
    } else {
      toast.error("Gagal Fetch Data User Company");
    }
  };

  const fetchDataJabatan = async () => {
    const res = await getJabatan(client);
    const arr = [];

    if (res.response.status === "000") {
      res.data.forEach((el, index) => {
        arr.push({
          label: el.position_name,
          value: el.id,
        });
      });

      setDataJabatan(arr);
    } else {
      toast.error("Gagal Fetch Data User Company");
    }
  };

  const handleCloseModalManage = () => {
    setOpenModalManage(false);
  };

  useEffect(() => {
    if (client) {
      fetchMappingApproval();
      fetchDataDocType();
      fetchDataUserCompany();
      fetchDataJabatan();
    } else {
      toast.error("No Client Found");
    }
  }, []);

  return (
    <>
      <React.Fragment>
        <Paper sx={{ pl: 2, pr: 2, pt: 1, pb: 1 }}>
          <div
            className="row"
            onClick={() => {
              setIsCollapse(!isCollapse);
            }}
          >
            <div className="col-md-6">
              <h3>Advanced Filter</h3>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
          </div>
          <Collapse in={isCollapse}>
            <div className="row">
              <div className="col-md-6 mt-1 mb-1">
                <Select
                  options={docType}
                  placeholder="Document Type..."
                  onChange={(e) => setFltDocType(e)}
                  value={fltDocType}
                />
              </div>
              <div className="col-md-6 mt-1 mb-1">
                <Select
                  placeholder="User Company"
                  options={userCompany}
                  onChange={(e) => setFltUserCompany(e)}
                  value={fltUserCompany}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <Select
                  placeholder="Jabatan"
                  options={dataJabatan}
                  onChange={(e) => setFltJabatan(e)}
                  value={fltJabatan}
                />
              </div>
              <div className="col-md-6 mb-1">
                <Select
                  options={[
                    { label: "Level 1", value: "1" },
                    { label: "Level 2", value: "2" },
                    { label: "Level 3", value: "3" },
                  ]}
                  placeholder="Level..."
                  onChange={(e) => setFltLevel(e)}
                  value={fltLevel}
                />
              </div>
            </div>
          </Collapse>
        </Paper>
        <Paper sx={{ p: 2, mt: 1 }}>
          <h1>Mapping Approval</h1>
          <div className="row mt-1">
            <div className="col-md-3">
              <Input
                type="text"
                placeholder="Search..."
                style={{ width: "100%" }}
                value={fltSearch}
              />
            </div>
            <div className="col-md-7" />
            <div className="col-md-2">
              <Button
                variant="contained"
                color="primary"
                startIcon={<Icon>add</Icon>}
                style={{ width: "100%" }}
                onClick={() => setOpenModalManage(true)}
              >
                Tambah
              </Button>
            </div>
          </div>

          <DataTable
            className="mt-1"
            data={dataTable.filter((item) => {
              let flt1 = false,
                flt2 = false,
                flt3 = false,
                flt4 = false,
                flt5 = false;

              if (fltSearch === null) {
                flt1 = true;
              } else {
                if (
                  item?.level
                    ?.toUpperCase()
                    .includes(fltSearch.toUpperCase()) ||
                  item?.company_name
                    ?.toUpperCase()
                    .includes(fltSearch.toUpperCase()) ||
                  item?.company_alias
                    ?.toUpperCase()
                    .includes(fltSearch.toUpperCase()) ||
                  item?.document_type_name
                    ?.toUpperCase()
                    .includes(fltSearch.toUpperCase()) ||
                  item?.position_name
                    ?.toUpperCase()
                    .includes(fltSearch.toUpperCase())
                ) {
                  flt1 = true;
                }
              }

              if (fltLevel === null) {
                flt2 = true;
              } else {
                if (
                  item?.level
                    ?.toUpperCase()
                    .includes(fltLevel.label.toUpperCase())
                ) {
                  flt2 = true;
                }
              }

              if (fltDocType === null) {
                flt3 = true;
              } else {
                if (item?.document_type_id === fltDocType.value) {
                  flt3 = true;
                }
              }

              if (fltJabatan === null) {
                flt4 = true;
              } else {
                if (
                  item?.position_name
                    .toUpperCase()
                    .includes(fltJabatan.toUpperCase())
                ) {
                  flt4 = true;
                }
              }

              if (fltUserCompany === null) {
                flt5 = true;
              } else {
                if (
                  item?.company_name
                    .toUpperCase()
                    .includes(fltUserCompany.label.toUpperCase())
                ) {
                  flt5 = true;
                }
              }

              return flt1 && flt2 && flt3 && flt4 && flt5;
            })}
            columns={column}
            getRowKey={(data) => data.id}
            hasPagination={true}
          />
        </Paper>
      </React.Fragment>

      <ModalManage
        open={openModalManage}
        onClose={handleCloseModalManage}
        docType={docType}
        dataJabatan={dataJabatan}
      />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default MappingApproval;
