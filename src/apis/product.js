import axios from "axios";

export const ProductApis = {
  getAllProduct: async () => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}products`);
    return response.data;
  },
};
