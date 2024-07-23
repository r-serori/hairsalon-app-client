import CryptoJS from "crypto-js";

export const getUserId = (key: string): any => {
  try {
    const userId: string = localStorage.getItem("user_id");

    if (userId === null) throw new Error();

    const bytes = CryptoJS.AES.decrypt(userId, key);

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } catch (error) {
    return null;
  }
};
