import React from "react";

function BodyLegal12() {
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
        sama dengan pihak lainnya, secara melawan hukum dan yang dapat
        mengakibatkan timbulnya kerugian terutama bagi salah satu Pihak dalam
        Perjanjian. Serta berusaha semaksimal mungkin agar tenaga kerja
        masing-masing Pihak yang terkait dengan pelaksanaan Perjanjian ini tidak
        terlibat dalam persekongkolan.
      </p>
      <div className="ml-1" style={{ textAlign: "justify" }}>
        <ol
          start={2}
          style={{
            listStyle: "decimal",
          }}
        >
          <li>
            Apabila ada indikasi maupun bukti terjadinya persekongkolan
            sebagaimana dimaksud dalam ayat 1 Pasal ini, maka Para Pihak sepakat
            untuk mengambil tindakan tegas sesegera mungkin untuk memutuskan
            hubungan kerja dengan tenaga kerja tersebut, dan pihak yang
            dirugikan dapat mengambil tindakan hukum yang dianggap perlu,
            termasuk melaporkan kepada pihak Kepolisian dan/atau melakukan
            gugatan perdata dan/atau pidana terkait kerugian yang timbul.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BodyLegal12;
