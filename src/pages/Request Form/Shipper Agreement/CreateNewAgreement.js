import Select from "react-select";
import { Grid } from "@mui/material";
import ModalDokLegal from "./ModalDokLegal";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import React, { useState, useEffect } from "react";
import PublishIcon from "@mui/icons-material/Publish";
import Input from "@mostrans/web-components/components/base/Input";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DateRangePicker from "@mostrans/web-components/components/advanced/DateRangePicker";
import FloatingButtonMostrans from "../../../components/GeneralComponent/FloatingButtonMostrans";
import DropdownButton from "@mostrans/web-components/components/advanced/Button/DropdownButton";
import {
  dataJenisProduk,
  dataNamaPIC,
  dataNoHP,
  dataDocumentNumber,
  dataNPWP,
  dataNomorPerizinan,
  dataNomorAkta,
  dataNomorRekening,
  dataNamaBank,
  dataAtasNamaRekening,
  dataAktaAvaible,
  dataJenisPerizinan,
  dataNamaPerusahaan,
  dataModalShipper,
} from "./BaseRecoil";
import { useRecoilState } from "recoil";
import { GetMasterJenisProduk, GetShipper } from "../../../GQL/query";
import { useApolloClient } from "@apollo/client";
import moment from "moment";
import { insertShipperAgreement } from "../../../GQL/mutation";

function CreateNewAgreement(props) {
  const client = useApolloClient();
  const { mode } = props;
  const { fetchDataListing } = props;
  const [modalShowDokLegal, setModalShowDokLegal] = useState(false);
  const [localDataJenisProduk, setDataJenisProduk] =
    useRecoilState(dataJenisProduk);
  const [optionDataJenisProduk, setOptionDataJenisProduk] = useState([]);
  const [localDataNamaPIC, setDataNamaPIC] = useRecoilState(dataNamaPIC);
  const [localDataNoHP, setDataNoHP] = useRecoilState(dataNoHP);
  const [localDataDocumentNumber, setDataDocumentNumber] =
    useRecoilState(dataDocumentNumber);
  const [localDataNomorPerizinan, setDataNomorPerizinan] =
    useRecoilState(dataNomorPerizinan);
  const [localDataNPWP, setDataNPWP] = useRecoilState(dataNPWP);
  const [localDataNomorAkta, setDataNomorAkta] = useRecoilState(dataNomorAkta);
  const [localDataNomorRekening, setDataNomorRekening] =
    useRecoilState(dataNomorRekening);
  const [localDataNamaBank, setDataNamaBank] = useRecoilState(dataNamaBank);
  const [localDataAtasNamaRekening, setDataAtasNamaRekening] =
    useRecoilState(dataAtasNamaRekening);
  const [localDataAktaAvaible, setDataAktaAvaible] =
    useRecoilState(dataAktaAvaible);
  const [optionDataShipper, setOptionDataShipper] = useState([]);
  const [localDataJenisPerizinan, setDataJenisPerizinan] =
    useRecoilState(dataJenisPerizinan);
  const [localDataNamaPerusahaan, setDataNamaPerusahaan] =
    useRecoilState(dataNamaPerusahaan);
  const [dataModal, setDataModal] = useRecoilState(dataModalShipper);
  const [validate, setValidate] = useState({
    Nama_Perusahaan: true,
    Document_Number: true,
    Nama_PIC: true,
    No_HP: true,
    Jenis_Produk: true,
    Jenis_Perizinan: true,
    Nomor_Perizinan: true,
    NPWP: true,
    Akta_Available: true,
    No_Akta: true,
    Nama_Bank: true,
    Nomor_Rekening: true,
    Nama_Pemilik_Rekening: true,
  });

  const optionsAktaAvaible = [
    {
      value: "1",
      label: "Masih Berlaku",
    },
    {
      value: "0",
      label: "Sudah Tidak Berlaku",
    },
  ];

  const fetchDataJenisProdukOptions = async () => {
    const query = await GetMasterJenisProduk(client);
    setOptionDataJenisProduk(query.getMasterJenisProduk.data);
  };

  useEffect(() => {
    fetchDataJenisProdukOptions();
  }, []);

  let optionsDataJenisProduk = optionDataJenisProduk?.map((el) => {
    return {
      value: el.id,
      label: el.nama_jenis_produk,
    };
  });

  const fetchDataShipper = async () => {
    const query = await GetShipper(client);
    setOptionDataShipper(query.getShipper.data);
  };

  useEffect(() => {
    fetchDataShipper();
  }, []);

  let optionsDataShipper = optionDataShipper?.map((el) => {
    return {
      value: el.id,
      label: el.nama_shipper,
      alamat: el.alamat,
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

  const CekValidate = async (submit) => {
    let alertVar = false;

    if (!localDataNamaPerusahaan) {
      validate.Nama_Perusahaan = false;
      alertVar = true;
    }

    if (!localDataDocumentNumber) {
      validate.Document_Number = false;
      alertVar = true;
    }

    if (!localDataNamaPIC) {
      validate.Nama_PIC = false;
      alertVar = true;
    }

    if (!localDataNoHP) {
      validate.No_HP = false;
      alertVar = true;
    }

    if (!localDataJenisProduk) {
      validate.Jenis_Produk = false;
      alertVar = true;
    }

    if (!localDataJenisPerizinan) {
      validate.Jenis_Perizinan = false;
      alertVar = true;
    }

    if (!localDataAktaAvaible) {
      validate.Akta_Available = false;
      alertVar = true;
    }

    if (!localDataNPWP) {
      validate.NPWP = false;
      alertVar = true;
    }

    if (!localDataNomorAkta) {
      validate.No_Akta = false;
      alertVar = true;
    }

    if (!localDataNomorPerizinan) {
      validate.Nomor_Perizinan = false;
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
      if (localDataAktaAvaible?.value == "1") {
        let dataDokumen = {
          submit: submit ? true : false,
          document_number: localDataDocumentNumber,
          shipper_id: "33",
          signature_date: "2022-10-9",
          nama_pic: localDataNamaPIC,
          create_by: "1",
          no_hp: localDataNoHP,
          jenis_perizinan: localDataJenisPerizinan,
          no_perizinan: localDataNomorPerizinan,
          npwp: localDataNPWP,
          akta_available: "true",
          no_akta: localDataNomorAkta,
          nama_bank: localDataNamaBank,
          no_rekening: localDataNomorRekening,
          nama_pemilik_rekening: localDataAtasNamaRekening,
          jenisProduk: [
            {
              jenis_produk_id: localDataJenisProduk?.value,
            },
          ],
        };

        try {
          const result = await insertShipperAgreement(client, dataDokumen);

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
      } else if (localDataAktaAvaible?.value == "0") {
        let dataDokumen = {
          submit: true,
          document_number: localDataDocumentNumber,
          shipper_id: "62",
          signature_date: "2022-10-9",
          nama_pic: localDataNamaPIC,
          create_by: "1",
          no_hp: localDataNoHP,
          jenis_perizinan: localDataJenisPerizinan,
          no_perizinan: localDataNomorPerizinan,
          npwp: localDataNPWP,
          akta_available: "false",
          no_akta: localDataNomorAkta,
          nama_bank: localDataNamaBank,
          no_rekening: localDataNomorRekening,
          nama_pemilik_rekening: localDataAtasNamaRekening,
          jenisProduk: [
            {
              jenis_produk_id: localDataJenisProduk?.value,
            },
          ],
        };

        try {
          const result = await insertShipperAgreement(client, dataDokumen);

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
    }
  };

  useEffect(() => {
    return () => {
      setDataNamaPerusahaan("");
      setDataDocumentNumber("");
      setDataNamaPIC("");
      setDataNoHP("");
      setDataJenisProduk("");
      setDataJenisPerizinan("");
      setDataNPWP("");
      setDataAktaAvaible("");
      setDataNomorAkta("");
      setDataNomorPerizinan("");
      setDataNamaBank("");
      setDataAtasNamaRekening("");
      setDataNomorRekening("");
    };
  }, []);

  console.log(dataModal);

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
            placeholder="Pilih Perusahaan"
            options={optionsDataShipper}
            value={optionsDataShipper.label}
            onChange={(e) => setDataNamaPerusahaan(e)}
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

      <Grid container className="mb-1">
        <Grid md={6} className={"pr-1"}>
          <label className="control-label">Nama PIC</label>
          <Input
            className={"w-100"}
            onChange={(e) => setDataNamaPIC(e.target.value)}
            type="text"
            placeholder={"Nama PIC"}
            value={dataModal?.shipperDetail?.nama_pic}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={6}>
          <label className="control-label">No HP</label>
          <Input
            className={"w-100"}
            onChange={(e) => setDataNoHP(e.target.value)}
            type="number"
            placeholder={"No HP PIC"}
            value={dataModal?.shipperDetail?.no_hp}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
      </Grid>

      <Grid className={"pr-1"}>
        <label className="control-label">Jenis Produk</label>
        <Select
          name="form-field-name"
          placeholder="Pilih Produk"
          options={optionsDataJenisProduk}
          value={optionsDataJenisProduk.label}
          onChange={(e) => setDataJenisProduk(e)}
        />
      </Grid>

      <Grid container className="mb-1 pt-1">
        <Grid md={4} className="pr-1">
          <label className="control-label">Jenis Perizinan</label>
          <Input
            className={"w-100"}
            onChange={(e) => setDataJenisPerizinan(e.target.value)}
            type="text"
            placeholder={"Jenis Perizinan"}
            value={dataModal?.shipperDetail?.jenis_perizinan}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Nomor Perizinan</label>
          <Input
            className={"w-100 mb-1"}
            onChange={(e) => setDataNomorPerizinan(e.target.value)}
            type="number"
            placeholder="Nomor Perizinan"
            value={dataModal?.shipperDetail?.no_perizinan}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">NPWP</label>
          <Input
            className={"w-100 mb-1"}
            onChange={(e) => setDataNPWP(e.target.value)}
            type="number"
            placeholder="NPWP"
            value={dataModal?.shipperDetail?.npwp}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
      </Grid>

      <Grid container className="mb-1">
        <Grid md={6} className={"pr-1"}>
          <label className="control-label">Akta Avaible</label>
          <Select
            name="form-field-name"
            placeholder="Akta Avaible"
            options={optionsAktaAvaible}
            value={optionsAktaAvaible.value}
            onChange={(e) => setDataAktaAvaible(e)}
          />
        </Grid>
        <Grid md={6}>
          <label className="control-label">No Akta</label>
          <Input
            className={"w-100"}
            onChange={(e) => setDataNomorAkta(e.target.value)}
            type="number"
            placeholder={"No Akta"}
            value={dataModal?.shipperDetail?.no_akta}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
      </Grid>

      <Grid container className="mb-1 pt-1">
        <Grid md={4} className="pr-1">
          <label className="control-label">Nama Bank</label>

          <Input
            className={"w-100 mb-1"}
            placeholder="Nama Bank"
            type="text"
            onChange={(e) => setDataNamaBank(e.target.value)}
            value={dataModal?.shipperDetail?.nama_bank}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Nomor Rekening</label>
          <Input
            className={"w-100 mb-1"}
            onChange={(e) => setDataNomorRekening(e.target.value)}
            type="number"
            placeholder="Nomor Rekening"
            value={dataModal?.shipperDetail?.no_rekening}
            disabled={mode == 3 ? true : false}
          />
        </Grid>
        <Grid md={4} className="pr-1">
          <label className="control-label">Nama Pemilik Rekening</label>
          <Input
            className={"w-100 mb-1"}
            onChange={(e) => setDataAtasNamaRekening(e.target.value)}
            type="text"
            // disabled={detil ? true : false}
            value={dataModal?.shipperDetail?.nama_pemilik_rekening}
            disabled={mode == 3 ? true : false}
            placeholder="Nama Pemilik Rekening"
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
