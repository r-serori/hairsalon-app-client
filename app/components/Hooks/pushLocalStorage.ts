import CryptoJS from "crypto-js";
import _ from "lodash";

export const pushUserId = (userId: number, key: string): boolean => {
  // データをJSON文字列に変換
  try {
    if (key === null || !userId) return false;
    const dataString = JSON.stringify(userId);

    const encryptedData = CryptoJS.AES.encrypt(dataString, key).toString();

    localStorage.setItem("user_id", encryptedData);
    return true;
  } catch (error) {
    return false;
  }
};
