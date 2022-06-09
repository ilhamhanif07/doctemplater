import React from "react";
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
import BodyLegal5 from "./ConstructPDF/BodyLegal5";
import BodyLegal6 from "./ConstructPDF/BodyLegal6";
import BodyLegal7 from "./ConstructPDF/BodyLegal7";
import BodyLegal8 from "./ConstructPDF/BodyLegal8";
import BodyLegal9 from "./ConstructPDF/BodyLegal9";
import BodyLegal10 from "./ConstructPDF/BodyLegal10";
import BodyLegal11 from "./ConstructPDF/BodyLegal11";
import BodyLegal12 from "./ConstructPDF/BodyLegal12";
import BodyLegal13 from "./ConstructPDF/BodyLegal13";
import BodyLegal14 from "./ConstructPDF/BodyLegal14";
import BodyLegal15 from "./ConstructPDF/BodyLegal15";
import BodyLegal16 from "./ConstructPDF/BodyLegal16";
import BodyLegal17 from "./ConstructPDF/BodyLegal17";
import { STYLE_A4 } from "./styleA4";
import FooterDokLegal from "./ConstructPDF/FooterDokLegal";

export default function ModalDokLegal({ isOpen, onRequestClose }) {
  return (
    <div>
      <Dialog maxWidth="lg" fullWidth open={isOpen} onClose={onRequestClose}>
        <DialogTitle>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="h3-custom m-0">Preview PDF</h3>
            <IconButton onClick={onRequestClose}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>

        <DialogContent style={{ padding: "0" }}>
          <div
            style={{
              width: "100%",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#E9EAEF",
            }}
          >
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal1 />
                  <FooterDokLegal pageNumber={1} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal2 />
                  <FooterDokLegal pageNumber={2} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal3 />
                  <FooterDokLegal pageNumber={3} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal4 />
                  <FooterDokLegal pageNumber={4} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal5 />
                  <FooterDokLegal pageNumber={5} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal6 />
                  <FooterDokLegal pageNumber={6} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal7 />
                  <FooterDokLegal pageNumber={7} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal8 />
                  <FooterDokLegal pageNumber={8} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal9 />
                  <FooterDokLegal pageNumber={9} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal10 />
                  <FooterDokLegal pageNumber={10} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal11 />
                  <FooterDokLegal pageNumber={11} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal12 />
                  <FooterDokLegal pageNumber={12} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal13 />
                  <FooterDokLegal pageNumber={13} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal14 />
                  <FooterDokLegal pageNumber={14} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal15 />
                  <FooterDokLegal pageNumber={""} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal16 />
                  <FooterDokLegal pageNumber={""} />
                </React.Fragment>
              </div>
            </div>
            <div style={STYLE_A4} id={"pdf_doklegal"}>
              <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <React.Fragment>
                  <BodyLegal17 />
                  <FooterDokLegal pageNumber={""} />
                </React.Fragment>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
