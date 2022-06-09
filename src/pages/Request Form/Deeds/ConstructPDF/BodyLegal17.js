import React from "react";
import "./style.css";

function BodyLegal17() {
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
      <p style={{ marginLeft: "15px" }}>
        Kedua dapat mengajukan rencana pelatihan terkait mutu armada dan produk
        melalui permintaan tertulis kepada Pihak Pertama apabila diperlukan.
      </p>

      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "disc",
          }}
        >
          <li>Melakukan maintenance armada sehingga armada layak digunakan</li>
        </ol>
      </div>

      <br />

      <p>
        <span style={{ fontWeight: "800" }}>HSE Complain 100 %</span>
      </p>
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "disc",
          }}
        >
          <li>
            Melakukan dokumentasi, investigasi, dan memberikan penjelasan serta
            tindakan korektif dan pencegahan terhadap semua penyimpangan selama
            proses distribusi sesuai dengan standar prosedur Pihak Kedua.
          </li>
          <li>
            Menyediakan P3K, APAR, Segitiga pengaman, Pengganjal roda dan
            peralatan lain terkait safety
          </li>
        </ol>
      </div>

      <br />

      <p>
        <span style={{ fontWeight: "800" }}>Cancel Trip 100 %</span>
      </p>
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "disc",
          }}
        >
          <li>
            Pihak Kedua dan Driver dapat mengoperasikan aplikasi MOSTRANS dengan
            benar
          </li>
          <li>
            Memastikan driver memiliki keahlian mengemudikan armada dengan
            minimal standard Lisensi SIM B1 dan masih berlaku;
          </li>
          <li>
            Memastikan driver melaksanakan instruksi yang diberikan oleh{" "}
            <span style={{ fontStyle: "italic" }}>customer</span>
          </li>
          <li>
            Memastikan driver menggunakan handphone yang mendukung operasional
            aplikasi MOSTRANS
            <br />
            Dalam hal Pihak Kedua melakukan Sub-Kontrak terhadap kewajiban yang
            berdampak terhadap kulitas dari produk, Pihak Kedua bertanggung
            jawab atas pemenuhan kewajiban SLA ini oleh sub-kontraktonya dan
            harus memiliki sistem untuk kualifikasi pemasok Sub-Kontrak
            tersebut.
          </li>
        </ol>
      </div>

      <br />

      <p>
        <span style={{ fontWeight: "800" }}>Customer Care 90 %</span>
      </p>
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          style={{
            listStyle: "disc",
          }}
        >
          <li>
            Menindaklanjuti klaim dari pihak shipper jika terjadi kerusakan
            barang
          </li>
          <li>
            Menindaklanjuti complain dari MOSTRANS untuk menjadi perbaikan di
            bulan berikutnya
          </li>
        </ol>
      </div>

      <br />

      <table className="cusBorder">
        <tr className="cusBorder">
          <td className="cusTd cusTable">Result</td>
          <td className="cusTd cusTable">Total</td>
          <td className="cusTd cusTable">Kategori</td>
        </tr>
        <tr className="cusBorder" style={{ backgroundColor: "blue" }}>
          <td className="cusTd cusTable">A</td>
          <td className="cusTd cusTable">95-100</td>
          <td className="cusTd cusTable">PLATINUM</td>
        </tr>
        <tr className="cusBorder" style={{ backgroundColor: "green" }}>
          <td className="cusTd cusTable">B</td>
          <td className="cusTd cusTable">85-94,99</td>
          <td className="cusTd cusTable">GOLD</td>
        </tr>
        <tr className="cusBorder" style={{ backgroundColor: "yellow" }}>
          <td className="cusTd cusTable">C</td>
          <td className="cusTd cusTable">75-84,99</td>
          <td className="cusTd cusTable">SILVER</td>
        </tr>
        <tr className="cusBorder" style={{ backgroundColor: "red" }}>
          <td className="cusTd cusTable">D</td>
          <td className="cusTd cusTable">{"<"}75</td>
          <td className="cusTd cusTable">BRONZE</td>
        </tr>
      </table>
    </div>
  );
}

export default BodyLegal17;
