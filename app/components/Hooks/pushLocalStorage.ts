import CryptoJS from "crypto-js";
import _ from "lodash";

interface UserData {
  user_id: number;
  role: string;
}

export const pushUserData = (userData: UserData, key: string) => {
  // データをJSON文字列に変換
  try {
    if (key === null || _.isEmpty(userData) || _.every(userData)) return false;
    const dataString = JSON.stringify(userData);

    const encryptedData = CryptoJS.AES.encrypt(dataString, key).toString();

    localStorage.setItem("user_data", encryptedData);
    return true;
  } catch (error) {
    return false;
  }
};

export const pushOwnerId = (ownerId: number, key: string) => {
  try {
    if (ownerId === undefined || !ownerId || key === null) return false;

    const ownerIdString = JSON.stringify(ownerId);

    const encryptedOwnerId = CryptoJS.AES.encrypt(
      ownerIdString,
      key
    ).toString();

    localStorage.setItem("owner_id", encryptedOwnerId);
    return true;
  } catch (error) {
    return false;
  }
};
