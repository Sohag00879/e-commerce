import { baseApi } from "../../api/baseApi";

const getAllProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => ({
        url: "/shop/products",
        method: "GET",
      }),
    }),
  }),
});
export const { useAllProductsQuery } = getAllProductsApi;
