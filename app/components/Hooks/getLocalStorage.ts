import CryptoJS from "crypto-js";
import { UserData } from "../Hooks/interface";

export const getRole = (key: string): string | null => {
  try {
    const userData = localStorage.getItem("user_data");

    const bytes = CryptoJS.AES.decrypt(userData, key);

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData.role;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export const getUserId = (key: string): number | null => {
  try {
    const userData = localStorage.getItem("user_data");

    const bytes = CryptoJS.AES.decrypt(userData, key);

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData.user_id;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export const getUserData = (key: string): UserData | null => {
  try {
    const userData = localStorage.getItem("user_data");

    const bytes = CryptoJS.AES.decrypt(userData, key);

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export const getOwnerId = (key: string): number | null => {
  try {
    const ownerId = localStorage.getItem("owner_id");

    const bytes = CryptoJS.AES.decrypt(ownerId, key);

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export const getVioRoleData = (key: string, role: string): string | null => {
  try {
    const roleData = localStorage.getItem("role_data");

    const bytes = CryptoJS.AES.decrypt(roleData, key);

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    const dataMather = () => {
      for (const key in decryptedData) {
        if (decryptedData[key] === role) {
          return String(key);
        }
      }
    };
    const matchData: string = dataMather();

    const matchDataResult: string =
      matchData === "owner_id"
        ? "オーナー"
        : matchData === "manager_id"
        ? "マネージャー"
        : "スタッフ";

    return matchDataResult;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};
