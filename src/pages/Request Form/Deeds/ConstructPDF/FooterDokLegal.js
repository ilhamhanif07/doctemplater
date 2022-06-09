import React from "react";
import "./style.css";

export function FooterDokLegal({ pageNumber }) {
  return (
    <div
      className="d-flex justify-content-end"
      style={{ position: "relative", left: "0", botom: "0", height: "" }}
    >
      <table>
        <tr>
          <td style={{ textAlign: "end" }}>
            {pageNumber}
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <table className="cusBorder">
              <tr className="cusBorder">
                <td className="cusTd cusTable">Pihak Pertama</td>
                <td className="cusTd cusTable">Pihak Kedua</td>
              </tr>
              <tr className="cusBorder">
                <td className="cusTd cusTable">
                  <br />
                </td>
                <td className="cusTd cusTable">
                  <br />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default FooterDokLegal;
