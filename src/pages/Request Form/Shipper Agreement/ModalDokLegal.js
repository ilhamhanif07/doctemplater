import React, { useRef } from "react";
import {
  Fab,
  Dialog,
  DialogContent,
  Tooltip,
  IconButton,
  DialogTitle,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import BodyLegal1 from "./ConstructPDF/BodyLegal1";
import BodyLegal2 from "./ConstructPDF/BodyLegal2";
import BodyLegal3 from "./ConstructPDF/BodyLegal3";
import BodyLegal4 from "./ConstructPDF/BodyLegal4";
import BodyLegal1a from "./ConstructPDF/BodyLegal1a";
import FooterDokLegal from "./ConstructPDF/FooterDokLegal";
import HeaderDokLegal from "./ConstructPDF/HeaderDokLegal";
import { STYLE_A4 } from "./styleA4";
import ReactToPrint from "react-to-print";
import styled from "@emotion/styled";

export default function ModalDokLegal({ isOpen, onRequestClose }) {
  const PAPER_WIDTH = 800;

  const PrintPage = styled.div`
    min-width: 800px;
    max-width: 800px;
    min-height: calc(800px * 1.41);
    max-height: calc(800px * 1.41);
    overflow: hidden;
    background-color: #ffffff;
    padding: 8rem 4rem;
    margin-bottom: 2rem;
    color: black !important;
    @media print {
      width: 80%;
      height: 1401px;
      min-height: 1401px;
      max-height: 1401px;
      min-width: 80%;
      max-width: 80%;
      overflow: visible;
      margin-bottom: 0;
    }
  `;

  const PrintWrapper = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e9eaef;
    @media print {
      background-color: white;
      padding-top: 0;
      padding-bottom: 0;
    }
  `;
  const printRef = useRef(null);

  return (
    <div>
      <Dialog
        maxWidth="lg"
        fullWidth
        open={isOpen}
        onClose={onRequestClose}
        sx={{ display: isOpen ? "block" : "none" }}
      >
        <DialogTitle>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="h3-custom m-0">Preview PDF</h3>
            <IconButton onClick={onRequestClose}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>

        <ReactToPrint
          trigger={() => (
            <button
              onClick={() => {
                console.log(printRef);
              }}
              className="text-danger"
              style={{
                fontSize: "20px",
                marginTop: "-45px",
                marginBottom: "5px",
                marginLeft: "669px",
              }}
            >
              Download File
            </button>
          )}
          content={() => printRef.current}
        />

        <DialogContent style={{ padding: "0" }}>
          <PrintWrapper ref={printRef}>
            <PrintPage>
              <div className="d-flex flex-column">
                <React.Fragment>
                  <HeaderDokLegal pageNumber={1} />
                  <BodyLegal1 />
                  <FooterDokLegal />
                </React.Fragment>
              </div>
            </PrintPage>
            <PrintPage>
              <div className="d-flex flex-column">
                <React.Fragment>
                  <HeaderDokLegal pageNumber={2} />
                  <BodyLegal1a />
                  <FooterDokLegal />
                </React.Fragment>
              </div>
            </PrintPage>
            <PrintPage>
              <div className="d-flex flex-column">
                <React.Fragment>
                  <HeaderDokLegal pageNumber={3} />
                  <BodyLegal2 />
                  <FooterDokLegal />
                </React.Fragment>
              </div>
            </PrintPage>
            <PrintPage>
              <div className="d-flex flex-column">
                <React.Fragment>
                  <HeaderDokLegal pageNumber={4} />
                  <BodyLegal3 />
                  <FooterDokLegal />
                </React.Fragment>
              </div>
            </PrintPage>
            <PrintPage>
              <div className="d-flex flex-column">
                <React.Fragment>
                  <HeaderDokLegal pageNumber={5} />
                  <BodyLegal4 />
                  <div style={{ marginTop: "270px" }}>
                    <FooterDokLegal />
                  </div>
                </React.Fragment>
              </div>
            </PrintPage>
          </PrintWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
}
