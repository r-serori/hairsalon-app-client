import CryptoJS from "crypto-js";

export const getRole = (key: string) => {
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

export const getUserId = (key: string) => {
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

export const getUserData = (key: string) => {
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

export const getOwnerId = (key: string) => {
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
