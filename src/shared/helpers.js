import html2canvas from "html2canvas";
import Swal from "sweetalert2";
import moment from "moment";
import PizZipUtils from "pizzip/utils/index.js";
// import _toLower from 'lodash/toLower';
// import _startCase from 'lodash/startCase';

export const generateFileName = (tipe, originalFileName) => {
  const currentDate = new Date();
  return (
    tipe +
    currentDate.getFullYear() +
    (currentDate.getMonth() + 1) +
    currentDate.getDate() +
    currentDate.getHours() +
    currentDate.getMinutes() +
    currentDate.getSeconds() +
    "." +
    originalFileName.replace(/^.*\./g, "")
  );
};

export const htmlToImage = async (element) => {
  const input = element;
  const canvas = await html2canvas(input, {
    useCORS: true,
  });
  await html2canvas(input).then(function (canvas) {
    document.body.appendChild(canvas);
  });
  return canvas.toDataURL("image/png");
};

export const swalAlert = ({ text = "", title = "Success" }, timer = 5_000) => {
  Swal.fire({
    text,
    title,
    timer,
    position: "top",
    customClass: { container: "sweetalert-z-index" },
  });
};

export const swalConfirm = (
  { text = "Anda Yakin?", title = "Konfirmasi" },
  successCB = () => {},
  deniedCB = () => {},
  canceledCB = () => {}
) => {
  Swal.fire({
    text,
    title,
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonColor: "#ff5e3f",
    confirmButtonColor: "#39da8a",
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
    position: "top",
    customClass: { container: "sweetalert-z-index" },
  }).then((res) =>
    res.isConfirmed ? successCB?.() : res.isDismissed ? deniedCB?.() : canceledCB?.()
  );
};

// export const customAxios = Axios.create({ url: ENDPOINT });
export const strMatch = (str, targetString) => {
  if (!str) return true;
  if (!targetString) return false;
  return String(targetString).toLowerCase().includes(String(str).toLowerCase());
};

export const convertDate = (dateInMs) => {
  if (!+dateInMs) return null;
  return moment(+dateInMs).format("YYYY-MM-DD HH:mm");
};

export const convertDateTimeString = (dateInMs) => {
  if (!+dateInMs) return null;

  const convertedDate = moment(+dateInMs).format("YYYY-MM-DD HH:mm:ss");
  const newDate = new Date(convertedDate);
  const month = newDate.toLocaleString("id-ID", { month: "long" });
  let hour;
  let minutes;
  if (newDate.getHours() < 10) {
    hour = "0" + newDate.getHours();
  } else {
    hour = newDate.getHours();
  }

  if (newDate.getMinutes() < 10) {
    minutes = "0" + newDate.getMinutes();
  } else {
    minutes = newDate.getMinutes();
  }

  return (
    newDate.getDate() +
    " " +
    month +
    " " +
    newDate.getFullYear() +
    " " +
    hour +
    ":" +
    minutes +
    " WIB"
  );
};

export const convertDateString = (dateInMs) => {
  if (!+dateInMs) return null;
  var yuhu = moment(+dateInMs).format("YYYY-MM-DD HH:mm");
  var t = new Date(yuhu);
  var month = t.toLocaleString("id-ID", { month: "long" });
  return t.getDate() + " " + month + " " + t.getFullYear();
};

export const getMinutes = (minute = 0) => {
  return 1000 * 60 * minute;
};

export const getDate = () => moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

export const utf8ToBase64 = (str) => Buffer.from(str, "utf-8").toString("base64");

export const arrayBufferToBlob = (buffer, type = "") => {
  let blob = new Blob([buffer], { type });
  return blob;
};

export const downloadBlob = (blob, fileName) => {
  let link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  // document.removeChild(link);
};

export const getFirstName = (name) => {
  return String(name).trim().replace(/ .*/, " ");
};

export const dateFormat = (d) => {
  var t = new Date(d);
  var month = t.toLocaleString("id-ID", { month: "long" });
  return t.getDate() + " " + month + " " + t.getFullYear();
};

export const getStatusDokumen = (data) => {
  if (data.detail_data.length > 0) {
    if (
      data.detail_data[0].rejected == false &&
      data.detail_data[0].approved == false &&
      data.detail_data[0].status == null
    ) {
      return "Upload Baru_success";
    } else if (data.detail_data[0].rejected == true && data.detail_data[0].status == "A") {
      return "Rejected_danger";
    } else if (
      data.detail_data[0].rejected == false &&
      data.detail_data[0].approved == false &&
      data.detail_data[0].status == "R"
    ) {
      return "Sedang Reupload_warning";
    } else {
      return "Approve_success";
    }
  } else {
    return "Belum Upload_danger";
  }
};

export const loadFile = (url, callback) => {
  return PizZipUtils.getBinaryContent(url, callback);
};
