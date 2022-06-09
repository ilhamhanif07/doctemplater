import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { dataNamaDirektur, dataNamaJabatan, dataNamaPerusahaan, dataNamaNotaris, dataWilayahNotaris, dataNomorAkta } from "../BaseRecoil";
import { GetCity } from "../../../../GQL/query";

function BodyLegal1() {
  const [localDataNamaDirektur, setDataNamaDirektur] = useRecoilState(dataNamaDirektur);
  const [localDataNamaJabatan, setDataNamaJabatan] = useRecoilState(dataNamaJabatan);
  const [localDataNamaPerusahaan, setDataNamaPerusahaan] = useRecoilState(dataNamaPerusahaan);
  const [localDataNamaNotaris, setDataNamaNotaris] = useRecoilState(dataNamaNotaris);
  const [localDataWilayahNotaris, setDataWilayahNotaris] = useRecoilState(dataWilayahNotaris);
  const [localDataNomorAkta, setDataNomorAkta] = useRecoilState(dataNomorAkta);
  const [dataKota, setDataKota] = useState("")

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(async ()=>{
    let a = await GetCity("-6.095240299999999","106.6889271")
    setDataKota(a)
  })

  const m = new Date();
  let month = months[m.getMonth()];

  const weekday = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  const h = new Date();
  let hari = h.getDate();

  const y = new Date();
  let year = y.getFullYear();

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
      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PERJANJIAN KERJASAMA
        <br />
        EKSPEDISI MELALUI MOSTRANS
        <br />
        antara
        <br />
        PT MOSTRANS GLOBAL DIGILOG
        <br />
        dan
        <br />
        {localDataNamaPerusahaan?.label}
        <br />
        Nomor : NOMOR PERUSAHAAN
        <br />
      </p>

      <hr />

      <p style={{ textAlign: "justify" }}>
        Perjanjian Kerjasama Pengiriman Barang (Ekspedisi) (selanjutnya disebut{" "}
        <span style={{ fontWeight: "800" }}>“Perjanjian”</span>) ini dibuat dan
        ditandatangani pada hari {day}, tanggal {hari}, bulan {month}, tahun{" "}
        {year} ({m.getDate()}-{m.getMonth()}-{m.getFullYear()}) oleh dan antara:
      </p>

      <br />

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          type="I"
          style={{
            listStyle: "upper-roman",
          }}
        >
          <li>
            <span style={{ fontWeight: "800" }}>
              PT MOSTRANS GLOBAL DIGILOG
            </span>{" "}
            suatu perseroan terbatas yang didirikan berdasarkan hukum negara
            Republik Indonesia, berkedudukan di Jakarta Timur dengan alamat di
            Jl. Pulo Lentut No. 12, Kawasan Industri Pulogadung, Kelurahan Rawa
            Terate, Kecamatan Cakung, Jakarta Timur, dalam hal ini diwakili oleh{" "}
            <span style={{ fontWeight: "800" }}>BERTY ARGIYANTARI</span>, dalam
            kedudukannya sebagai Presiden Direktur dari dan oleh karenanya sah
            bertindak untuk dan atas nama PT Mostrans Global Digilog
            (selanjutnya disebut{" "}
            <span style={{ fontWeight: "800" }}>“Pihak Pertama”</span>); dan
          </li>
          <br />
          <li>
            <span style={{ fontWeight: "800" }}>{localDataNamaPerusahaan?.label}</span>, suatu
            Persekutuan Komanditer yang didirikan berdasarkan hukum negara
            Republik Indonesia yang berkedudukan di {dataKota} dan beralamat di{" "}
            {localDataNamaPerusahaan?.alamat} dalam hal ini diwakili oleh{" "}
            <span style={{ fontWeight: "800" }}>{localDataNamaDirektur}</span>,
            bertindak dalam kedudukannya sebagai {localDataNamaJabatan} berdasarkan Akta
            Nomor {localDataNomorAkta} tanggal [TANGGAL AKTA] yang dibuat di hadapan {localDataNamaNotaris}, Notaris di {localDataWilayahNotaris}, dari dan oleh
            karenanya sah bertindak untuk dan atas nama {localDataNamaPerusahaan?.label}
            (selanjutnya disebut{" "}
            <span style={{ fontWeight: "800" }}>“Pihak Kedua/Transporter”</span>
            ).
          </li>
        </ol>
      </div>

      <br />

      <p style={{ textAlign: "justify" }}>
        Pihak Pertama dan Pihak Kedua (selanjutnya secara bersama-sama disebut
        <span style={{ fontWeight: "800" }}>”Para Pihak”</span> dan secara
        sendiri-sendiri disebut{" "}
        <span style={{ fontWeight: "800" }}>”Pihak”</span>) terlebih dahulu
        menerangkan hal-hal berikut:
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "upper-latin",
          }}
        >
          <li>
            Bahwa Pihak Pertama adalah suatu perusahaan yang bergerak dalam
            bidang distribusi, penjualan, dan logistic healthcare product dimana
            dalam melaksanakan kegiatan bisnisnya antara lain menggunakan suatu
            aplikasi dengan merek dagang MOSTRANS;
          </li>
          <li>
            Bahwa Pihak Kedua adalah sebuah perusahan yang bergerak di bidang
            jasa pengiriman barang/ekspedisi.
          </li>
          <li>
            Para Pihak bermaksud untuk mengadakan kerjasama penjemputan dan
            pengiriman Barang melalui Aplikasi MOSTRANS (
            <span style={{ fontWeight: "800" }}>“Kerja Sama”</span>).{" "}
          </li>
        </ol>
      </div>

      <br />

      <p style={{ textAlign: "justify" }}>
        Berdasarkan hal-hal tersebut, Para Pihak sepakat untuk mengadakan
        Perjanjian ini dengan syarat dan ketentuan sebagai berikut:
      </p>

      <br />

      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 1
        <br />
        DEFINISI
        <br />
      </p>

      <p style={{ textAlign: "justify" }}>
        Kecuali ditentukan lain di dalam Perjanjian ini, kata-kata di bawah ini
        mempunyai arti sebagai berikut:
      </p>
    </div>
  );
}

export default BodyLegal1;
