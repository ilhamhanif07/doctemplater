import Select from "react-select";
import { Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import ModalDokLegal from "./ModalDokLegal";
import SaveIcon from "@mui/icons-material/Save";
import { useApolloClient } from "@apollo/client";
import IconButton from "@mui/material/IconButton";
import React, { useState, useEffect } from "react";
import { GetTransporter } from "../../../GQL/query";
import PublishIcon from "@mui/icons-material/Publish";
import Input from "@mostrans/web-components/components/base/Input";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DateRangePicker from "@mostrans/web-components/components/advanced/DateRangePicker";
import FloatingButtonMostrans from "../../../components/GeneralComponent/FloatingButtonMostrans";
import DropdownButton from "@mostrans/web-components/components/advanced/Button/DropdownButton";
import { dataManagementFee, dataNamaDirektur, dataNamaJabatan, dataNamaPerusahaan, dataNamaNotaris, dataWilayahNotaris, dataNomorAkta, dataNamaBank, dataNomorRekening, dataAtasNamaRekening } from "./BaseRecoil";

function CreateNewAgreement(props) {
  const client = useApolloClient();
  const [localDataManagementFee, setDataManagementFee] = useRecoilState(dataManagementFee);
  const [localDataNamaDirektur, setDataNamaDirektur] = useRecoilState(dataNamaDirektur);
  const [localDataNamaJabatan, setDataNamaJabatan] = useRecoilState(dataNamaJabatan);
  const [localDataNamaPerusahaan, setDataNamaPerusahaan] = useRecoilState(dataNamaPerusahaan);
  const [localDataNamaNotaris, setDataNamaNotaris] = useRecoilState(dataNamaNotaris);
  const [localDataWilayahNotaris, setDataWilayahNotaris] = useRecoilState(dataWilayahNotaris);
  const [localDataNomorAkta, setDataNomorAkta] = useRecoilState(dataNomorAkta);
  const [localDataNomorRekening, setDataNomorRekening] = useRecoilState(dataNomorRekening);
  const [localDataNamaBank, setDataNamaBank] = useRecoilState(dataNamaBank);
  const [localDataAtasNamaRekening, setDataAtasNamaRekening] = useRecoilState(dataAtasNamaRekening);
  const [optionDataNamaPerusahaan, setOptionDataNamaPerusahaan ] = useState([]);
  const [modalShowDokLegal, setModalShowDokLegal] = useState(false);

  const fetchDataNamaPerusahaanOptions = async () => {
    const query = await GetTransporter(client);
    setOptionDataNamaPerusahaan(query.getTransporter.data);
  };

  useEffect(() => {
    fetchDataNamaPerusahaanOptions();
  }, []);

  let optionsDataNamaPerusahaan = optionDataNamaPerusahaan?.map((el) => {
    return { value: el.id, label: el.nama_transporter , alamat:el.alamat, phone: el.phone};
  });

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

  const handleClose = () => {
    setModalShowDokLegal(false);
  };

  const onChangeManagementFee = (e) => {
    setDataManagementFee(e.target.value);
  };

  const onChangeNamaDirektur = (e) => {
    setDataNamaDirektur(e.target.value);
  };

  const onChangeNamaJabatan = (e) => {
    setDataNamaJabatan(e.target.value);
  };

  const onChangeOptionNamaPerusahaan = (e) => {
    setDataNamaPerusahaan(e)
  }

  const onChangeNamaNotaris = (e) => {
    setDataNamaNotaris(e.target.value)
  }

  const onChangeWilayahNotaris = (e) => {
    setDataWilayahNotaris(e.target.value)
  }

  const onChangeNomorAkta = (e) => {
    setDataNomorAkta(e.target.value)
  }

  const onChangeNomorRekening = (e) => {
    setDataNomorRekening(e.target.value)
  }

  const onChangeNamaBank = (e) => {
    setDataNamaBank(e.target.value)
  }

  const onChangeAtasNamaRekening = (e) => {
    setDataAtasNamaRekening(e.target.value)
  }

  return (
    <div>
      <ModalDokLegal
        isOpen={modalShowDokLegal}
        onRequestClose={handleClose}
        style={customStyles}
      />

      <Grid container className="mb-1">
        <Grid md={0.5} className={"pr-1"}>
          <IconButton
            variant="text"
            color="primary"
            className="mt-1"
            onClick={() => props.isClose()}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>

        <Grid md={5.75} className={"pr-1"}>
          <h1 style={{ marginTop: "5px" }}>Form New Agreement</h1>
        </Grid>

        <Grid md={5.75} className={"pr-1 d-flex justify-content-end"}>
          <DropdownButton
            label="Submit File"
            autoCloseMenu
            buttonProps={{
              color: "primary",
              variant: "contained",
              className: "px-5 mt-1",
            }}
            listMenu={[
              {
                icon: <SaveIcon />,
                text: "Save Form",
                onClick: () => {},
              },
              {
                icon: <PublishIcon />,
                text: "Submit Form",
                onClick: () => {},
              },
            ]}
          />
        </Grid>
      </Grid>

      <hr />

      <Grid container className="mb-1">
        <Grid md={6} className={"pr-1"}>
          <label className="control-label">Perusahaan</label>
          <Select
            name="form-field-name"
            options = {optionsDataNamaPerusahaan}
            placeholder="Pilih Perusahaan"
            value={optionsDataNamaPerusahaan.label}
            onChange={(e)=>onChangeOptionNamaPerusahaan(e)}
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
          <label className="control-label">Direktur</label>
          <Input
            className={"w-100"}
            onChange={(e) => onChangeNamaDirektur(e)}
            type="text"
            placeholder={"Nama Direktur"}
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

      <Grid className={"pr-1"}>
        <label className="control-label">Jabatan</label>
        <Input
            className={"w-100"}
            onChange={(e) => onChangeNamaJabatan(e)}
            type="text"
            placeholder={"Jabatan"}
          />
      </Grid>

      <Grid className={"pr-1 mt-2"}>
        <label className="control-label">Management Fee</label>
        <Input
          className={"w-100 mb-1"}
          onChange={(e) => onChangeManagementFee(e)}
          type="number"
        />
      </Grid>

      <Grid container className="mb-1">
        <Grid md={6} className="pr-1">
          <label className="control-label">Tanggal Dokumen</label>
          <div className="w-100 form-group">
            <DateRangePicker />
          </div>
        </Grid>
        <Grid md={6} className="pr-1">
          <label className="control-label">End Date</label>
          <div className="form-group">
            <DateRangePicker />
          </div>
        </Grid>
      </Grid>

      <Grid className={"pr-1"}>
        <label className="control-label">Nama NOTARIS</label>
        <Input
            className={"w-100"}
            type="text"
            placeholder={"Nama NOTARIS"}
            onChange={(e)=>onChangeNamaNotaris(e)}
          />
      </Grid>

      <Grid className={"pr-1 mt-2"}>
        <label className="control-label">Wilayah Kedudukan NOTARIS</label>
        <Input
            className={"w-100"}
            type="text"
            multiline
            placeholder={"Wilayah Kedudukan NOTARIS"}
            onChange={(e)=>onChangeWilayahNotaris(e)}
          />
      </Grid>

      <Grid container className="mb-1 mt-2">
        <Grid md={6} className={"pr-1"}>
          <label className="control-label">Nomor AKTA</label>
          <Input
            className={"w-100"}
            name="form-field-name"
            placeholder="Nomor AKTA"
            onChange={(e)=>onChangeNomorAkta(e)}
          />
        </Grid>
        <Grid md={6} className="pr-1">
          <label className="control-label">Tanggal AKTA</label>
          <div className="form-group">
            <DateRangePicker />
          </div>
        </Grid>
      </Grid>

      <Grid container className="mb-1 mt-2">
        <Grid md={4} className={"pr-1"}>
          <label className="control-label">Nama Bank</label>
          <Input
            className={"w-100"}
            name="form-field-name"
            placeholder="Nama Bank"
            onChange={(e)=>onChangeNamaBank(e)}
          />
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Nomor Rekening</label>
          <Input
            className={"w-100"}
            name="form-field-name"
            placeholder="Nomor Rekening"
            onChange={(e)=>onChangeNomorRekening(e)}
            type="number"
          />
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Nama Rekening</label>
          <Input
            className={"w-100"}
            name="form-field-name"
            placeholder="Nama Rekening"
            onChange={(e)=>onChangeAtasNamaRekening(e)}
          />
        </Grid>
      </Grid>

      <FloatingButtonMostrans
        title={"+"}
        tooltip={"Preview PDF"}
        callback={() => {
          setModalShowDokLegal(true);
        }}
      />
    </div>
  );
}

export default CreateNewAgreement;
