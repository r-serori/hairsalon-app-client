import CryptoJS from "crypto-js";
import _ from "lodash";
import { UserData, VioRoleData } from "./interface";

export const pushUserData = (userData: UserData, key: string): boolean => {
  // データをJSON文字列に変換
  try {
    if (key === null || _.isEmpty(userData)) return false;
    const dataString = JSON.stringify(userData);

    const encryptedData = CryptoJS.AES.encrypt(dataString, key).toString();

    localStorage.setItem("user_data", encryptedData);
    return true;
  } catch (error) {
    return false;
  }
};

export const pushOwnerId = (ownerId: number, key: string): boolean => {
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

export const vioRoleData = (roleData: VioRoleData, key: string): boolean => {
  try {
    if (key === null || _.isEmpty(roleData)) return false;
    const dataString = JSON.stringify(roleData);

    const encryptedData = CryptoJS.AES.encrypt(dataString, key).toString();

    localStorage.setItem("role_data", encryptedData);

    return true;
  } catch (error) {
    return false;
  }
};
