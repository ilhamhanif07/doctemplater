import firebase from "./Firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const storage = getStorage(firebase);

export const uploadPDF = async (file, path) => {
  // const path = `moshelp/images/DRF/Attachment Td/${fileName}`;
  let storageRef = ref(storage, path);
  try {
    const url = await new Promise((res, reject) => {
      const data = uploadBytesResumable(storageRef, file);
      data.on(
        "state_changed",
        () => {},
        reject,
        async () => {
          const url = await getDownloadURL(data.snapshot.ref);
          res(url);
        }
      );
    });
    return url;
  } catch (err) {
    console.log("err upload", err);
  }
};
