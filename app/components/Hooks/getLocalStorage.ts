import CryptoJS from "crypto-js";
import { KeyState } from "../../store/auth/keySlice";

// export const getRole = (key: string): string | null => {
//   try {
//     const userData = localStorage.getItem("user_data");

//     const bytes = CryptoJS.AES.decrypt(userData, key);

//     const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

//     return decryptedData.role;
//   } catch (error) {
//     console.log("Error", error);
//     return null;
//   }
// };

export const getUserId = (key: KeyState): number | null => {
  try {
    const userId = localStorage.getItem("user_id");

    const bytes = CryptoJS.AES.decrypt(userId, String(key));

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};
