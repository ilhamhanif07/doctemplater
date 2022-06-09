import React from "react";
import { useRecoilState } from "recoil";
import { dataNamaDirektur, dataNamaJabatan, dataNamaPerusahaan, dataNamaNotaris, dataWilayahNotaris, dataNomorAkta } from "../BaseRecoil";

function BodyLegal10() {
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
          start={4}
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Pihak Kedua bersedia bertanggung jawab dan dituntut dihadapan hukum
            serta membayar ganti rugi kepada Pihak Pertama apabila terbukti
            semua Barang dan/atau dokumen yang disebutkan pada ayat (3) di atas
            disembunyikan, tidak dikembalikan dan/atau dimanfaatkan untuk
            keuntungan dan/atau kebaikan Pihak Kedua.
          </li>
          <li>
            Pengakhiran Perjanjian tidak mengurangi hak Para Pihak untuk
            melaksanakan haknya berdasarkan Pasal 1267 Kitab Undang-Undang Hukum
            Perdata.
          </li>
        </ol>
      </div>

      <br />

      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 12
        <br />
        KORESPONDENSI
        <br />
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Setiap pemberitahuan, persetujuan, dan komunikasi lain yang
            diberikan atau dibuat berdasarkan Perjanjian ini akan dibuat secara
            tertulis dan diserahkan atau dikirimkan kepada Para Pihak yang
            terkait pada alamat yang bersangkutan atau nomor faksimili yang
            disebutkan di bawah ini:
            <ol
              style={{
                listStyle: "decimal",
                marginLeft: "15px",
              }}
            >
              <li>
                Pihak Pertama <span style={{ marginLeft: "10px" }}>:</span>{" "}
                <span style={{ fontWeight: "800" }}>
                  PT MOSTRANS GLOBAL DIGILOG{" "}
                </span>{" "}
                <br />
                Alamat <span style={{ marginLeft: "56px" }}>:</span> Jl. Pulo
                Lentut No. 12 Kawasan Industri Pulogadung, Kel. Rawa Terate,
                Kec. Cakung,{" "}
                <span style={{ marginLeft: "110px" }}>Jakarta Timur</span>{" "}
                <br />
                Telepon <span style={{ marginLeft: "53px" }}>:</span>{" "}
                021-46823120 <br />
                Untuk Perhatian <span style={{ marginLeft: "2px" }}>:</span> Bp.
                Arnold Rudianto
              </li>
              <li>
                Pihak Kedua <span style={{ marginLeft: "24px" }}>:</span> <span style={{fontWeight:"800"}}>{localDataNamaPerusahaan?.label}</span><br />
                Alamat <span style={{ marginLeft: "56px" }}>:</span> {localDataNamaPerusahaan?.alamat}
                <br />
                Telepon <span style={{ marginLeft: "53px" }}>:</span> {localDataNamaPerusahaan?.phone}<br />
                Untuk Perhatian <span style={{ marginLeft: "2px" }}>:</span> {localDataNamaDirektur}
              </li>
            </ol>
          </li>
          <li>
            Dalam hal terjadi perubahan alamat tersebut di atas atau alamat
            terakhir yang tercatat pada masing-masing Pihak, maka perubahan
            tersebut harus diberitahukan secara tertulis kepada Pihak lain
            selambat-lambatnya 5 (lima) hari kerja sebelum terjadinya perubahan
            alamat dimaksud, jika perubahan alamat tersebut tidak diberitahukan,
            maka pemberitahuan, persetujuan, dan komunikasi lain yang diberikan
            atau dibuat berdasarkan Perjanjian ini dianggap telah diberikan
            sebagaimana mestinya dengan dikirimnya surat atau pemberitahuan itu
            ke alamat tersebut di atas atau alamat yang terakhir yang diketahui
            dan/atau tercatat pada masing-masing Pihak.
          </li>
          <li>
            Pemberitahuan dianggap telah diterima oleh Pihak yang dituju dalam 5
            (lima) hari kerja setelah tanggal pengiriman jika pemberitahuan
            disampaikan melalui kurir dan tidak adanya tanda terima yang
            ditandatangani oleh Pihak tersebut atau hari yang sama dengan
            tanggal pengiriman jika pemberitahuan disampaikan melalui faksimili
            dan konfirmasi laporan pengiriman telah diterima oleh pengirim.
          </li>
        </ol>
      </div>
      <br />

      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 13
        <br />
        KEADAAN MEMAKSA (
        <span style={{ fontStyle: "italic" }}>FORCE MAJEURE</span>)
        <br />
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Tidak dilaksanakannya atau tertundanya pelaksanaan sebagian atau
            keseluruhan ketentuan Perjanjian ini oleh salah satu Pihak atau Para
            Pihak tidak termasuk sebagai pelanggaran Perjanjian ini apabila hal
            tersebut disebabkan oleh adanya keadaan kahar (
            <span style={{ fontStyle: "italic" }}>force majeure</span>), oleh
            karenanya Para Pihak sepakat untuk menyelesaikannya melalui
            musyawarah mufakat.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal10;
