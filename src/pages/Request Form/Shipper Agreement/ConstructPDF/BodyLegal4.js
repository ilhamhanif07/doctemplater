import React from "react";

function BodyLegal4() {
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
  return (
    <div
      className="mt-1"
      style={{
        height: "100%",
        color: "black",
        fontSize: "14px",
        fontFamily: "Roboto, Helvetica Neue, sans-serif",
        width: "674px",
      }}
    >
      <p style={{ marginLeft: "15px" }}>
        Demikian <span style={{ fontStyle: "italic" }}>Agreement</span> ini
        dibuat dan ditandatangani oleh Para Pihak pada hari {day}, tanggal{" "}
        {d.getDate()}-{d.getMonth()}-{d.getFullYear()}, dibuat dalam rangkap 2
        (dua) yang masing-masing dibubuhi meterai secukupnya dan oleh karenanya
        keduanya mempunyai kekuatan hukum yang sama dan mengikat bagi Para
        Pihak.
      </p>
      <br />
      <br />
      <table>
        <tr>
          <td style={{ width: "400px", textAlign: "center" }}>
            <span style={{ fontWeight: "800" }}>PIHAK PERTAMA</span>
          </td>
          <td style={{ width: "400px", textAlign: "center" }}>
            <span style={{ fontWeight: "800" }}>PIHAK KEDUA</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "400px", textAlign: "center" }}>
            <span style={{ fontWeight: "800" }}>Nama Perusahaan</span>
          </td>
          <td style={{ width: "400px", textAlign: "center" }}>
            <span style={{ fontWeight: "800" }}>Nama Perusahaan</span>
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
          <td style={{ width: "400px", textAlign: "center" }}>
            <span style={{ fontWeight: "800" }}>
              Nama Penandatangan Kontrak Jabatan
            </span>
          </td>
          <td style={{ width: "400px", textAlign: "center" }}>
            <span style={{ fontWeight: "800" }}>
              Nama Penandatangan Kontrak Jabatan
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default BodyLegal4;
