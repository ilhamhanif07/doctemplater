import React from "react";
import {
  dataNamaPerusahaan,
  dataNamaPIC,
  dataNoHP,
  dataJenisProduk,
  dataDocumentNumber,
  dataJenisPerizinan,
  dataNomorPerizinan,
  dataNPWP,
  dataNamaBank,
  dataNomorRekening,
  dataAtasNamaRekening,
  dataNomorAkta,
} from "../BaseRecoil";
import { useRecoilState } from "recoil";

export default function BodyLegal1() {
  const [localDataNamaPerusahaan, setDataNamaPerusahaan] =
    useRecoilState(dataNamaPerusahaan);
  const [localDataNamaPIC, setDataNamaPIC] = useRecoilState(dataNamaPIC);
  const [localDataNoHP, setDataNoHP] = useRecoilState(dataNoHP);
  const [localDataJenisProduk, setDataJenisProduk] =
    useRecoilState(dataJenisProduk);
  const [localDataDocumentNumber, setDataDocumentNumber] =
    useRecoilState(dataDocumentNumber);
  const [localDataJenisPerizinan, setDataJenisPerizinan] =
    useRecoilState(dataJenisPerizinan);
  const [localDataNomorPerizinan, setDataNomorPerizinan] =
    useRecoilState(dataNomorPerizinan);
  const [localDataNPWP, setDataNPWP] = useRecoilState(dataNPWP);
  const [localDataNomorRekening, setDataNomorRekening] =
    useRecoilState(dataNomorRekening);
  const [localDataNamaBank, setDataNamaBank] = useRecoilState(dataNamaBank);
  const [localDataAtasNamaRekening, setDataAtasNamaRekening] =
    useRecoilState(dataAtasNamaRekening);
  const [localDataNomorAkta, setDataNomorAkta] = useRecoilState(dataNomorAkta);

  return (
    <div style={{ marginLeft: "16px", marginTop: "20px" }}>
      <table>
        <tr>
          <td className="cusTdKiri">No</td>
          <td className="cusTds">:</td>
          <td className="cusTdKanan">{localDataDocumentNumber}</td>
        </tr>
      </table>

      <table style={{ marginTop: "20px" }}>
        <tr>
          <td className="cusTds cusTdsKhusus">
            <span style={{ fontWeight: "800" }}>Pihak Pertama (Shipper)</span>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri">Nama Perusahaan</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">{localDataNamaPerusahaan?.label}</td>
        </tr>
        <tr>
          <td className="cusTdKiri">Alamat Perusahaan</td>
          <td className="cusTds">:</td>
          <td className="cusTdKanan">{localDataNamaPerusahaan?.alamat}</td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri2">Nama PIC</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan2">{localDataNamaPIC}</td>
          <td className="cusTdsAtasss">No HP</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan3">{localDataNoHP}</td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri">Jenis Produk</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">{localDataJenisProduk?.label}</td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdsAtas cusTdsKhusus">
            <span style={{ fontStyle: "italic" }}>Data Legalitas</span>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri">Jenis Perizinan</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">{localDataJenisPerizinan}</td>
        </tr>
        <tr>
          <td className="cusTdAtasKiri">No. Perizinan</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">{localDataNomorPerizinan}</td>
        </tr>
        <tr>
          <td className="cusTdAtasKiri">NPWP</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">{localDataNPWP}</td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri2">Alat Perusahaan Susunan Terakhir</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan2">Tersedia / Tidak Tersedia</td>
          <td className="cusTdsAtasss">No Akta</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan4">{localDataNomorAkta}</td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdsAtas cusTdsKhusus">
            <span style={{ fontStyle: "italic" }}>Data Pembayaran</span>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri">Nama Bank</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">{localDataNamaBank}</td>
        </tr>
        <tr>
          <td className="cusTdAtasKiri">No. Rekening</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">{localDataNomorRekening}</td>
        </tr>
        <tr>
          <td className="cusTdAtasKiri">Nama Pemilik Rekening</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">{localDataAtasNamaRekening}</td>
        </tr>
      </table>

      <table style={{ marginTop: "20px" }}>
        <tr>
          <td className="cusTds cusTdsKhusus">
            <span style={{ fontWeight: "800" }}>Pihak Kedua (MOSTRANS)</span>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri">Nama Perusahaan</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">PT MOSTRANS GLOBAL DIGILOG</td>
        </tr>
        <tr>
          <td className="cusTdKiri">Alamat Perusahaan</td>
          <td className="cusTds">:</td>
          <td className="cusTdKanan">
            Jl. Pulo Lentut No. 12, Kawasan Industri Pulogadung, Kelurahan Rawa
            Terate, Kecamatan Cakung, Jakarta Timur
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri2">Nama PIC</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan2">Nama Orang</td>
          <td className="cusTdsAtasss">No HP</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan3">086762538174</td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdsAtas cusTdsKhusus">
            <span style={{ fontStyle: "italic" }}>Data Legalitas</span>
          </td>
        </tr>
      </table>
    </div>
  );
}
