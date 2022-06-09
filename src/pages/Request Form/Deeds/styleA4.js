export const PAPER_WIDTH = 800;
export const BLOB_TYPE = {
  PDF: "application/pdf",
};
export const STYLE_A4 = {
  minWidth: PAPER_WIDTH,
  maxWidth: PAPER_WIDTH,
  minHeight: `calc(${PAPER_WIDTH}px*1.41)`,
  maxHeight: `calc(${PAPER_WIDTH}px*1.41)`,
  overflow: "hidden",
  backgroundColor: "#ffffff",
  padding: "8rem 4rem",
  marginBottom: "2rem",
  color: "black !important",
};
