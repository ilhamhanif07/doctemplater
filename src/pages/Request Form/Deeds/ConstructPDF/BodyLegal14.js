import React from "react";
import { useRecoilState } from "recoil";
import { dataNamaDirektur, dataNamaJabatan, dataNamaPerusahaan } from "../BaseRecoil";

function BodyLegal14() {
  const [localDataNamaDirektur, setDataNamaDirektur] = useRecoilState(dataNamaDirektur);
  const [localDataNamaJabatan, setDataNamaJabatan] = useRecoilState(dataNamaJabatan);
  const [localDataNamaPerusahaan, setDataNamaPerusahaan] = useRecoilState(dataNamaPerusahaan);
  return (
    <div
      className="mt-1"
      style={{
        height: "100%",
        color: "black",
        fontSize: "14px",
        fontFamily: "Roboto, Helvetica Neue, sans-serif",
      }}
    >
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          start={6}
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Apabila salah satu ketentuan dalam Perjanjian ini diputuskan menjadi
            tidak berlaku karena alasan apapun, maka ketidakberlakuan ketentuan
            tersebut tidak mempengaruhi keabsahan atau keberlanjutan atas
            ketentuan lain dalam Perjanjian ini.
          </li>
          <li>
            Kecuali ditentukan lain oleh Perjanjian ini, Para Pihak setuju untuk
            tidak menggandakan sebagian atau seluruh isi Perjanjian kepada pihak
            ketiga manapun untuk penggunaan apapun selain untuk pelaksanaan
            Perjanjian ini.
          </li>
          <li>
            Ketentuan-ketentuan yang lazim, biasa dan umum berlaku untuk suatu
            perjanjian seperti Perjanjian ini, kecuali apabila ketentuan
            tersebut bertentangan dengan Perjanjian ini, juga berlaku untuk
            Perjanjian ini.
          </li>
          <li>
            Surat-surat maupun dokumen-dokumen yang berhubungan dengan
            Perjanjian ini merupakan satu kesatuan dan bagian yang tidak dapat
            dipisahkan dari Perjanjian ini. Dengan ditandatanganinya Perjanjian
            ini, maka surat-surat dan/atau dokumen-dokumen pernah ditandatangani
            oleh Para Pihak yang bertentangan dengan Perjanjian ini dinyatakan
            tidak berlaku lagi.
          </li>
        </ol>
      </div>

      <br />
      <p style={{ textAlign: "justify" }}>
        Demikian Perjanjian ini dibuat dalam rangkap 2 (dua), telah dibaca dan
        dimengerti seluruh isinya oleh Para Pihak, masing-masing disertai dengan
        materai yang cukup dan memiliki kekuatan hukum yang sama, ditandatangani
        pada hari, tanggal, bulan dan tahun sebagaimana tersebut di atas.
      </p>

      <br />

      <table>
        <tr>
          <td style={{ width: "400px" }}>
            <span style={{ fontWeight: "800" }}>PIHAK PERTAMA</span>
          </td>
          <td style={{ width: "400px" }}>
            <span style={{ fontWeight: "800" }}>PIHAK KEDUA</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "400px" }}>
            <span style={{ fontWeight: "800" }}>
              PT MOSTRANS GLOBAL DIGILOG
            </span>
          </td>
          <td style={{ width: "400px" }}>
            <span style={{ fontWeight: "800" }}>{localDataNamaPerusahaan?.label}</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "400px" }}>
            {" "}
            <br /> <br /> <br /> <br /> <br /> <br />
          </td>
          <td style={{ width: "400px" }}>
            {" "}
            <br /> <br /> <br /> <br /> <br /> <br />
          </td>
        </tr>
        <tr>
          <td style={{ width: "400px" }}>
            <span style={{ fontWeight: "800" }}>Berty Argiyantari</span>
          </td>
          <td style={{ width: "400px" }}>
            <span style={{ fontWeight: "800" }}>{localDataNamaDirektur}</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "400px" }}>
            <span style={{ fontWeight: "800" }}>Presiden Direktur</span>
          </td>
          <td style={{ width: "400px" }}>
            <span style={{ fontWeight: "800" }}>{localDataNamaJabatan}</span>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default BodyLegal14;
