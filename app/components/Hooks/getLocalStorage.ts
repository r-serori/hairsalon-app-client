import CryptoJS from "crypto-js";
import { KeyState } from "../../store/auth/keySlice";

export const getUserId = (key: KeyState): number => {
  try {
    const userId = localStorage.getItem("user_id");

    const bytes = CryptoJS.AES.decrypt(userId, String(key));

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } catch (error) {
    return null;
  }
};
