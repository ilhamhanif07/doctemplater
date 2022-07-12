import React from "react";
import "./style.css";

export function FooterDokLegal() {
  return (
    <div
      //   className="d-flex justify-content-end"
      style={{ position: "relative", left: "0", botom: "0", height: "" }}
    >
      <table>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <table>
              <tr>
                <td className="cusPihak" style={{ textAlign: "center" }}>
                  Pihak Pertama
                </td>
                <td className="cusPihak" style={{ textAlign: "center" }}>
                  Pihak Kedua
                </td>
              </tr>
              <tr>
                <td className="cusPihak">
                  <br />
                </td>
                <td className="cusPihak">
                  <br />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <div style={{ display: "flex" }}>
        <hr className="new2" />
        <hr className="new1" />
      </div>
    </div>
  );
}

export default FooterDokLegal;
