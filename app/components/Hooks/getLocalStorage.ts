import CryptoJS from "crypto-js";

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

export const getUserId = (key: string): number | null => {
  try {
    const userData = localStorage.getItem("user_data");

    const bytes = CryptoJS.AES.decrypt(userData, key);

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData.user_role;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};
