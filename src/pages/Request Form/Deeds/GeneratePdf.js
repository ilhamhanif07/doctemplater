import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import React from "react";
import { loadFile } from "../../../shared/helpers";
import DocFile from "../../../assets/template.docx";
import { saveAs } from "file-saver";
import { useSetRecoilState } from "recoil";
import { docfile } from "./BaseRecoil";

const GeneratePdf = () => {
  const setDocFile = useSetRecoilState(docfile);
  const generateDocument = () => {
    loadFile(DocFile, function (error, content) {
      if (error) {
        throw error;
      }
      let zip = new PizZip(content);
      let doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
      doc.setData({
        nama_perusahaan: "PT. DIGILOG",
        nomor_dokumen: "123456",
        hari: "Senin",
        tanggal: "17",
        bulan: "Juli",
        tahun: "2022",
        full_tanggal: "17/07/2022",
      });
      try {
        doc.render();
      } catch (error) {
        function replaceErrors(key, value) {
          if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce(function (error, key) {
              error[key] = value[key];
              return error;
            }, {});
          }
          return value;
        }
        console.log(JSON.stringify({ error: error }, replaceErrors));

        if (error.properties && error.properties.errors instanceof Array) {
          const errorMessages = error.properties.errors
            .map(function (error) {
              return error.properties.explanation;
            })
            .join("\n");
          console.log("errorMessages", errorMessages);
          // errorMessages is a humanly readable message looking like this :
          // 'The tag beginning with "foobar" is unopened'
        }
        throw error;
      }

      var out = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      }); //Output the document using Data-URI
      saveAs(out, "output.docx");
      // return out;
      // setDocFile(out);
    });
  };

  return <button onClick={generateDocument}>hehe</button>;
};

export default GeneratePdf;
