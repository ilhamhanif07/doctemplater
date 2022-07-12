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
import DropdownButton from "@mostrans/web-components/components/advanced/Button/DropdownButton";
import FloatingButtonMostrans from "../../../components/GeneralComponent/FloatingButtonMostrans";
import {
  dataManagementFee,
  dataNamaDirektur,
  dataNamaJabatan,
  dataNamaPerusahaan,
  dataNamaNotaris,
  dataWilayahNotaris,
  dataNomorAkta,
  dataNamaBank,
  dataNomorRekening,
  dataAtasNamaRekening,
  dataDocumentNumber,
  dataKeluhanHari,
  dataSignatureDate,
  dataWaktuBerlaku,
  dataTanggalAkta,
  dataModalTransporter,
} from "./BaseRecoil";
import moment from "moment";
import { insertTransporterAgreement } from "../../../GQL/mutation";
import { mockComponent } from "react-dom/test-utils";

function CreateNewAgreement(props) {
  // mode 1 = create
  // mode 2 = edit
  // mode 3 = detail
  const { mode } = props;
  const { fetchDataListing } = props;
  const client = useApolloClient();
  const [localDataManagementFee, setDataManagementFee] =
    useRecoilState(dataManagementFee);
  const [localDataNamaDirektur, setDataNamaDirektur] =
    useRecoilState(dataNamaDirektur);
  const [localDataNamaJabatan, setDataNamaJabatan] =
    useRecoilState(dataNamaJabatan);
  const [localDataNamaPerusahaan, setDataNamaPerusahaan] =
    useRecoilState(dataNamaPerusahaan);
  const [localDataNamaNotaris, setDataNamaNotaris] =
    useRecoilState(dataNamaNotaris);
  const [localDataWilayahNotaris, setDataWilayahNotaris] =
    useRecoilState(dataWilayahNotaris);
  const [localDataNomorAkta, setDataNomorAkta] = useRecoilState(dataNomorAkta);
  const [localDataNomorRekening, setDataNomorRekening] =
    useRecoilState(dataNomorRekening);

  const [localDataNamaBank, setDataNamaBank] = useRecoilState(dataNamaBank);
  const [dataModal, setDataModal] = useRecoilState(dataModalTransporter);

  const [localDataAtasNamaRekening, setDataAtasNamaRekening] =
    useRecoilState(dataAtasNamaRekening);
  const [localDataDocumentNumber, setDataDocumentNumber] =
    useRecoilState(dataDocumentNumber);
  const [localDataKeluhanHari, setDataKeluhanHari] =
    useRecoilState(dataKeluhanHari);
  const [localDataWaktuBerlaku, setDataWaktuBerlaku] =
    useRecoilState(dataWaktuBerlaku);
  const [optionDataNamaPerusahaan, setOptionDataNamaPerusahaan] = useState([]);
  const [modalShowDokLegal, setModalShowDokLegal] = useState(false);
  const [startDate, setStartDate] = useRecoilState(dataSignatureDate);
  const [localDataTanggalAkta, setDataTanggalAkta] =
    useRecoilState(dataTanggalAkta);
  const [validate, setValidate] = useState({
    NamaPerusahaan: true,
    DocumentNumber: true,
    NamaDirektur: true,
    NamaJabatan: true,
    ManagementFee: true,
    SignatureDate: true,
    WaktuBerlaku: true,
    WaktuKeluhanHari: true,
    NamaNotaris: true,
    AlamatKedudukanNotaris: true,
    NomorAkta: true,
    NamaBank: true,
    NomorRekening: true,
    NamaPemilikRekening: true,
  });

  const fetchDataNamaPerusahaanOptions = async () => {
    const query = await GetTransporter(client);
    setOptionDataNamaPerusahaan(query.getTransporter.data);
  };

  useEffect(() => {
    fetchDataNamaPerusahaanOptions();
  }, []);

  let optionsDataNamaPerusahaan = optionDataNamaPerusahaan?.map((el) => {
    return {
      value: el.id,
      label: el.nama_transporter,
      alamat: el.alamat,
      phone: el.phone,
    };
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

  let endDate = moment(startDate?.format("YYYY-MM-DD"), "YYYY-MM-DD");
  endDate = endDate.add(localDataWaktuBerlaku, "years").format("YYYY-MM-DD");

  const CekValidate = async (submit) => {
    let alertVar = false;

    if (!localDataNamaPerusahaan) {
      validate.NamaPerusahaan = false;
      alertVar = true;
    }

    if (!localDataDocumentNumber) {
      validate.DocumentNumber = false;
      alertVar = true;
    }

    if (!localDataNamaDirektur) {
      validate.NamaDirektur = false;
      alertVar = true;
    }

    if (!localDataNamaJabatan) {
      validate.NamaJabatan = false;
      alertVar = true;
    }

    if (!localDataManagementFee) {
      validate.ManagementFee = false;
      alertVar = true;
    }

    if (!startDate) {
      validate.SignatureDate = false;
      alertVar = true;
    }

    if (!localDataWaktuBerlaku) {
      validate.WaktuBerlaku = false;
      alertVar = true;
    }

    if (!localDataKeluhanHari) {
      validate.WaktuKeluhanHari = false;
      alertVar = true;
    }

    if (!localDataNomorAkta) {
      validate.NomorAkta = false;
      alertVar = true;
    }

    if (!localDataAtasNamaRekening) {
      validate.NamaPemilikRekening = false;
      alertVar = true;
    }

    if (!localDataNamaBank) {
      validate.NamaBank = false;
      alertVar = true;
    }

    if (!localDataNomorRekening) {
      validate.NomorRekening = false;
      alertVar = true;
    }

    if (alertVar == true) {
      let kataAwal = "Ada Kata yang Kosong !";
      for (let i in validate) {
        if (validate[i] == false) {
          kataAwal += "\n - " + i;
        }
      }
      alert(kataAwal);
    } else if (alertVar == false) {
      let dataDokumen = {
        submit: submit ? true : false,
        transporter_id: "51",
        document_number: localDataDocumentNumber,
        signature_date: startDate.format("YYYY-MM-DD"),
        effective_date: startDate.format("YYYY-MM-DD"),
        expiry_date: endDate,
        waktu_berlaku_hari: localDataWaktuBerlaku,
        management_fee_persen: localDataManagementFee,
        waktu_keluhan_hari: localDataKeluhanHari,
        create_by: "1",
        nama_direktur: localDataNamaDirektur,
        jabatan: localDataNamaJabatan,
        no_akta: localDataNomorAkta,
        tanggal_akta: localDataTanggalAkta.format("YYYY-MM-DD"),
        nama_notaris: localDataNamaNotaris,
        wilayah_notaris: localDataWilayahNotaris,
        nama_bank: localDataNamaBank,
        no_rekening: localDataNomorRekening,
        nama_pemilik_rekening: localDataAtasNamaRekening,
      };

      try {
        const result = await insertTransporterAgreement(client, dataDokumen);

        if (result.status == "000") {
          alert("berhasil");
          props.isClose();
          fetchDataListing();
        } else {
          alert("gagal");
        }
      } catch (e) {
        console.log(e, "error");
      }
    }
  };

  useEffect(() => {
    return () => {
      setDataNamaPerusahaan("");
      setDataDocumentNumber("");
      setDataNamaDirektur("");
      setDataNamaJabatan("");
      setDataManagementFee("");
      setStartDate(moment());
      setDataWaktuBerlaku("");
      setDataKeluhanHari("");
      setDataNomorAkta("");
      setDataNamaBank("");
      setDataNomorRekening("");
      setDataAtasNamaRekening("");
      setDataModal([]);
    };
  }, []);

  return (
    <div>
      <ModalDokLegal isOpen={modalShowDokLegal} onRequestClose={handleClose} />
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
                onClick: () => {
                  CekValidate(0);
                },
              },
              {
                icon: <PublishIcon />,
                text: "Submit Form",
                onClick: () => {
                  CekValidate(1);
                },
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
            options={optionsDataNamaPerusahaan}
            placeholder="Pilih Perusahaan"
            value={
              mode == 3
                ? {
                    label: dataModal?.transporter?.nama_transporter,
                    value: dataModal?.transporter?.id,
                  }
                : mode == 2
                ? {
                    label: dataModal?.transporter?.nama_transporter,
                    value: dataModal?.transporter?.id,
                  }
                : optionsDataNamaPerusahaan?.label
            }
            onChange={(e) => setDataNamaPerusahaan(e)}
            isDisabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={6}>
          <label className="control-label">Document Number</label>
          <Input
            className={"w-100"}
            onChange={(e) => setDataDocumentNumber(e.target.value)}
            type="text"
            placeholder={"Nomor Dokumen"}
            value={dataModal?.document_number}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
      </Grid>

      <Grid md={6} className={"pr-1"}>
        <label className="control-label">Direktur</label>
        <Input
          className={"w-100"}
          onChange={(e) => setDataNamaDirektur(e.target.value)}
          type="text"
          placeholder={"Nama Direktur"}
          value={dataModal?.transporterDetail?.nama_direktur}
          disabled={mode == 3 ? true : false}
        />
      </Grid>

      <Grid className={"pr-1 pt-1"}>
        <label className="control-label">Jabatan</label>
        <Input
          className={"w-100"}
          onChange={(e) => setDataNamaJabatan(e.target.value)}
          type="text"
          placeholder={"Jabatan"}
          value={dataModal?.transporterDetail?.jabatan}
          disabled={mode == 3 ? true : false}
        />
      </Grid>
      <Grid className={"pr-1 mt-2"}>
        <label className="control-label">Management Fee</label>
        <Input
          className={"w-100 mb-1"}
          onChange={(e) => setDataManagementFee(e.target.value)}
          type="number"
          value={dataModal?.management_fee_persen}
          disabled={mode == 3 ? true : false}
          placeholder="Management Fee"
        />
      </Grid>
      <Grid container className="mb-1">
        <Grid md={4} className="pr-1">
          <label className="control-label">Signature Date</label>
          <div className="w-100 form-group">
            <DateRangePicker
              inputProps={{
                style: {},
              }}
              onApply={(_, dateData) => {
                setStartDate(dateData.startDate);
              }}
              value={dataModal?.signature_date}
              initialSettings={{
                startDate: moment(dataModal?.signature_date),
                endDate: moment(dataModal?.signature_date),
              }}
            />
          </div>
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Effective Date</label>
          <div className="w-100 form-group">
            <DateRangePicker
              value={dataModal?.signature_date}
              initialSettings={{
                startDate: moment(dataModal?.signature_date),
                endDate: moment(dataModal?.signature_date),
              }}
            />
          </div>
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Waktu Berlaku</label>
          <Input
            className={"w-100 mb-1"}
            onChange={(e) => setDataWaktuBerlaku(e.target.value)}
            type="number"
            placeholder={"dalam tahun"}
            value={dataModal?.waktu_berlaku_tahun}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
      </Grid>
      <Grid className={"pr-1 mt-1"}>
        <label className="control-label">Waktu Keluhan Hari</label>
        <Input
          className={"w-100 mb-1"}
          onChange={(e) => setDataKeluhanHari(e.target.value)}
          type="number"
          value={dataModal?.waktu_keluhan_hari}
          disabled={mode == 3 ? true : false}
        />
      </Grid>
      <Grid className={"pr-1"}>
        <label className="control-label">Nama NOTARIS</label>
        <Input
          className={"w-100"}
          type="text"
          placeholder={"Nama NOTARIS"}
          onChange={(e) => setDataNamaNotaris(e.target.value)}
          value={dataModal?.transporterDetail?.nama_notaris}
          disabled={mode == 3 ? true : false}
        />
      </Grid>
      <Grid className={"pr-1 mt-2"}>
        <label className="control-label">Wilayah Kedudukan NOTARIS</label>
        <Input
          className={"w-100"}
          type="text"
          multiline
          placeholder={"Wilayah Kedudukan NOTARIS"}
          onChange={(e) => setDataWilayahNotaris(e.target.value)}
          value={dataModal?.transporterDetail?.wilayah_notaris}
          disabled={mode == 3 ? true : false}
        />
      </Grid>
      <Grid container className="mb-1 mt-2">
        <Grid md={6} className={"pr-1"}>
          <label className="control-label">Nomor AKTA</label>
          <Input
            className={"w-100"}
            name="form-field-name"
            placeholder="Nomor AKTA"
            onChange={(e) => setDataNomorAkta(e.target.value)}
            value={dataModal?.transporterDetail?.no_akta}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={6} className="pr-1">
          <label className="control-label">Tanggal AKTA</label>
          <div className="form-group">
            <DateRangePicker
              onApply={(_, dateData) => {
                setDataTanggalAkta(dateData.localDataTanggalAkta);
              }}
              initialSettings={{
                startDate: moment(dataModal?.tanggal_akta),
                endDate: moment(dataModal?.tanggal_akta),
              }}
            />
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
            onChange={(e) => setDataNamaBank(e.target.value)}
            value={dataModal?.transporterDetail?.nama_bank}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Nomor Rekening</label>
          <Input
            className={"w-100"}
            name="form-field-name"
            placeholder="Nomor Rekening"
            onChange={(e) => setDataNomorRekening(e.target.value)}
            type="number"
            value={dataModal?.transporterDetail?.no_rekening}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Nama Rekening</label>
          <Input
            className={"w-100"}
            name="form-field-name"
            placeholder="Nama Rekening"
            onChange={(e) => setDataAtasNamaRekening(e.target.value)}
            value={dataModal?.transporterDetail?.nama_pemilik_rekening}
            disabled={mode == 3 ? true : false}
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
