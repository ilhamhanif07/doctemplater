import React from "react";
import { useRecoilState } from "recoil";
import { dataNamaPerusahaan, dataNamaBank, dataNomorRekening, dataAtasNamaRekening } from "../BaseRecoil";

function BodyLegal5() {
  const [localDataNamaPerusahaan, setDataNamaPerusahaan] = useRecoilState(dataNamaPerusahaan);
  const [localDataNomorRekening, setDataNomorRekening] = useRecoilState(dataNomorRekening);
  const [localDataNamaBank, setDataNamaBank] = useRecoilState(dataNamaBank);
  const [localDataAtasNamaRekening, setDataAtasNamaRekening] = useRecoilState(dataAtasNamaRekening);

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
      <p style={{ marginLeft: "15px", textAlign: "justify" }}>
        terhadap Pihak Kedua, maka Pihak Kedua setuju dan memberikan izin bagi
        Pihak Pertama untuk melakukan pemotongan pajak tersebut.
      </p>
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          start={6}
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Pihak Pertama akan melakukan pembayaran Biaya Pengiriman kepada
            Pihak Kedua selambat-lambatnya 30 (tiga puluh) Hari Kalender sejak
            diterimanya tagihan dari Pihak Kedua kepada Pihak Pertama secara
            baik dan benar. Dengan ketentuan bahwa tagihan atas pengiriman
            Barang sudah dilengkapi dengan tanda terima yang ditandantangani
            atau distempel oleh{" "}
            <span style={{ fontStyle: "italic" }}>Receiver</span>.
          </li>
          <li>
            <span style={{ fontStyle: "italic" }}>Management fee</span>{" "}
            sebagaimana diatur di dalam ayat (2) akan langsung diperhitungkan
            dalam tagihan yang harus dibayarkan oleh Pihak Pertama, sehingga
            akan menjadi faktor pengurang tagihan Biaya Pengiriman kepada Pihak
            Kedua.
          </li>
          <li>
            Pihak Kedua akan melakukan pembayaran{" "}
            <span style={{ fontStyle: "italic" }}>Management fee</span> kepada
            Pihak Pertama selambat-lambatnya 30 (tiga puluh) Hari Kalender sejak
            diterimanya tagihan dari Pihak Pertama kepada Pihak Kedua secara
            baik dan benar. Dengan ketentuan bahwa tagihan atas{" "}
            <span style={{ fontStyle: "italic" }}>Management fee</span> sudah
            dilengkapi dengan rekap jumlah{" "}
            <span style={{ fontStyle: "italic" }}>trip</span> serta total Biaya
            Pengiriman yang dilakukan selama bulan berjalan.
          </li>
          <li>
            Pembayaran tagihan Biaya Pengiriman dapat dilakukan oleh Pihak
            Pertama secara transfer ke rekening Pihak Kedua sebagai berikut:
          </li>
        </ol>
      </div>
      <p style={{ marginLeft: "15px", textAlign: "justify" }}>
        <span style={{fontWeight: "800"}}>{localDataNamaPerusahaan?.label}</span>
        <br />
        Nama Bank<span style={{ marginLeft: "50px" }}>:</span> {localDataNamaBank} <br />
        Nomor Rekening<span style={{ marginLeft: "18px" }}>:</span> {localDataNomorRekening} <br />
        Atas Nama<span style={{ marginLeft: "53px" }}>:</span> {localDataAtasNamaRekening}
      </p>
      <br />
      <p style={{ textAlign: "center", fontWeight: "800" }}>
        PASAL 5
        <br />
        HAK DAN KEWAJIBAN PIHAK PERTAMA
        <br />
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Pihak Pertama berhak untuk :
            <ol
              style={{
                marginLeft: "15px",
                listStyle: "lower-latin",
              }}
            >
              <li>
                melakukan audit terhadap Pihak Kedua setiap saat apabila
                dibutuhkan baik terhadap lokasi kantor, pool kendaraan, dokumen
                kendaraan yang mengangkut dan/atau dokumen terkait lainnya;
              </li>
              <li>
                menolak armada dari Pihak Kedua apabila tidak sesuai dengan
                standar yang telah ditentukan sebagaimana diatur pada Lampiran
                II;
              </li>
              <li>
                menegur dan meminta pertanggungjawaban dari Pihak Kedua apabila
                dalam menjalankan kewajibannya berdasarkan Perjanjian ini
                terbukti melanggar CDOB, CDAKB, ISO 9001, GDP, K3/OHSAS dan/atau
                ketentuan yang ditetapkan Pihak Pertama sebagaimana diatur pada
                Lampiran II;
              </li>
              <li>
                melakukan evaluasi terhadap Pihak Kedua dalam menjalankan
                kewajibannya berdasarkan Perjanjian ini sekurang-kurangnya 2
                (dua) kali dalam setahun
              </li>
            </ol>
          </li>
          <li>
            Pihak Pertama berkewajiban untuk:
            <ol
              style={{
                marginLeft: "15px",
                listStyle: "lower-latin",
              }}
            >
              <li>
                menginformasikan Pihak Kedua mengenai waktu dan jadwal
                pengambilan Barang di gudang{" "}
                <span style={{ fontStyle: "italic" }}>Shipper</span>;
              </li>
              <li>
                menginformasikan Pihak Kedua apabila terdapat perubahan volume
                atau perubahan jadwal pengiriman Barang paling lambat 1 (satu)
                hari sebelum Barang diambil oleh Pihak Kedua;
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal5;
