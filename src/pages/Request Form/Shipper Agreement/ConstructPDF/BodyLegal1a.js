import React from "react";

export default function BodyLegal1a() {
  return (
    <div style={{ marginLeft: "16px", marginTop: "20px" }}>
      <table>
        <tr>
          <td className="cusTdKiri">Jenis Perizinan</td>
          <td className="cusTds">:</td>
          <td className="cusTdKanan">Perizinan</td>
        </tr>
        <tr>
          <td className="cusTdAtasKiri">No. Perizinan</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">1782924984</td>
        </tr>
        <tr>
          <td className="cusTdAtasKiri">NPWP</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">892302042084</td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="cusTdAtasKiri2">Alat Perusahaan Susunan Terakhir</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan2">
            <span style={{ textDecoration: "line-through" }}>Tersedia</span> /
            Tidak Tersedia
          </td>
          <td className="cusTdsAtasss">No Akta</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan4">9813803001010</td>
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
          <td className="cusTdAtasKanan">BCA</td>
        </tr>
        <tr>
          <td className="cusTdAtasKiri">No. Rekening</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">5369837402</td>
        </tr>
        <tr>
          <td className="cusTdAtasKiri">Nama Pemilik Rekening</td>
          <td className="cusTdsAtas">:</td>
          <td className="cusTdAtasKanan">Nama Direktur</td>
        </tr>
      </table>

      <div
        className="ml-1"
        style={{
          textAlign: "justify",
        }}
      >
        <ol
          style={{
            listStyle: "decimal",
            marginLeft: "15px",
            marginTop: "15px",
          }}
        >
          <li>
            Hak dan Kewajiban Para Pihak
            <br />
            <span
              style={{
                fontWeight: "800",
                textDecoration: "underline",
                fontSize: "12px",
              }}
            >
              Shipper
            </span>
            <br />
            <div style={{ display: "flex" }}>
              <span style={{ fontSize: "12px" }}>Hak</span>
              <ol
                style={{
                  listStyle: "lower-latin",
                  marginLeft: "66px",
                  fontSize: "12px",
                }}
              >
                <li>
                  Memperoleh fasilitas atau jasa melalui aplikasi MOSTRANS dari
                  Pihak Pertama sebagai pilihan layanan pengiriman atas Barang;
                </li>
                <li>
                  Menerima notifikasi dari Transporter yang dikirimkan melalui
                  MOSTRANS atas dilakukannya proses penjemputan, pengiriman, dan
                  sampainya Barang ke tempat tujuan;
                </li>
                <li>
                  Menerima informasi perubahan mengenai area pengiriman, jarak
                  maksimum, Biaya Kirim, dari MOSTRANS selambat-lambatnya 7
                  (tujuh) Hari Kalendar sebelum perubahan tersebut berlaku umum;
                </li>
                <li>
                  Menerima informasi secara lengkap dan jelas dari MOSTRANS
                  maksimal 1 (satu) Hari Kalender jika terjadi kendala dan/atau
                  masalah pada layanan MOSTRANS; dan
                </li>
              </ol>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <span style={{ fontSize: "12px" }}>Kewajiban</span>
              <ol
                style={{
                  listStyle: "lower-latin",
                  marginLeft: "30px",
                  fontSize: "12px",
                }}
              >
                <li>
                  Membayar Biaya Kirim atas pelaksanaan jasa melalui layanan
                  MOSTRANS dengan status{" "}
                  <span style={{ fontStyle: "italic" }}>Proof of Delivery</span>{" "}
                  (POD) maupun{" "}
                  <span style={{ fontStyle: "italic" }}>Rejected</span> dalam
                  jangka waktu 30 (tiga puluh) hari setelah Shipper menerima
                  Faktur Tagihan{" "}
                </li>
                <li>Mengasuransikan Barang milik Shipper;</li>
                <li>
                  Bertanggung jawab penuh serta membebaskan MOSTRANS dari segala
                  tuntutan dalam hal terdapat produk milik Shipper yang terbukti
                  melanggar hukum.
                </li>
                <li>Menjaga nama baik, reputasi dan citra MOSTRANS.</li>
                <li>
                  Membayar biaya pembatalan sebesar 50% dari tarif ketika truk
                  sudah menuju tempat muat dan 75% dari tarif ketika truk sudah
                  sampai di tempat muat
                </li>
              </ol>
            </div>
            <br />
          </li>
        </ol>
      </div>
    </div>
  );
}
