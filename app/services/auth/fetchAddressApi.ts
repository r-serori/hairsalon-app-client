import axios from "axios";

export const fetchAddressApi = async (postalCode) => {
  try {
    const response = await axios.get(`/api/search`, {
      params: { zipcode: postalCode },
    });
    if (response.data.status === 200) {
      const result = response.data.results[0];
      return {
        prefecture: result.address1,
        city: result.address2,
        address_line1: result.address3,
      };
    } else {
      console.error(`Error: ${response.data.message}`);
      return null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
