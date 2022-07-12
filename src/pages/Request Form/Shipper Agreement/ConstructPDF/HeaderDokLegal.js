import { useRecoilValue } from "recoil";
import mostransLogo from "../../../../assets/logo-mostrans.png";
import "./style.css";
import { paramPreviewPDFSelector } from "../states";

export default function HeaderDokLegal({ pageNumber }) {
  const data = useRecoilValue(paramPreviewPDFSelector);
  return (
    <div className="col-md-12">
      <div className="row">
        <div
          className="col-md-5"
          style={{
            display: "flex",
            justifyContent: "left",
          }}
        ></div>

        <div
          className="col-md-12"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <table className="cusTables">
            <tbody>
              <tr>
                <td rowspan="4" style={{ width: "25%" }}>
                  <img
                    src={mostransLogo}
                    alt="mostrans logo"
                    style={{ width: "150px", height: "150px" }}
                  />
                </td>
                <td
                  className="cusTds"
                  style={{ width: "10.5rem", fontSize: "14px" }}
                >
                  <b>Formulir</b>
                </td>
                <td className="cusTds" style={{ fontSize: "12px" }}>
                  <b>Hal {pageNumber} dari 5</b>
                </td>
              </tr>
              <tr>
                <td
                  rowspan="3"
                  className="cusTds"
                  style={{ width: "10.5rem", fontSize: "14px" }}
                >
                  <b style={{ fontSize: "16px", justifyContent: "center" }}>
                    AGREEMENT SHIPPER DAN MOSTRANS
                  </b>
                </td>
                <td className="cusTds" style={{ fontSize: "12px" }}>
                  Document No : <br />{" "}
                  <b style={{ fontSize: "14px" }}>SOP-CM-01-00.DP01</b>
                </td>
              </tr>
              <tr>
                <td
                  className="cusTds"
                  style={{ width: "6.6rem", fontSize: "12px" }}
                >
                  Effective Date : <br />{" "}
                  <b style={{ fontSize: "14px" }}>21 May 2021</b>
                </td>
              </tr>
              <tr>
                <td
                  className="cusTds"
                  style={{ width: "6.6rem", fontSize: "12px" }}
                >
                  Review Date : <br />{" "}
                  <b style={{ fontSize: "14px" }}>21 May 2023</b>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
