import { baseApi } from "../../api/baseApi";

const getSingleProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleProduct: builder.query({
      query: () => ({
        url: "/product/iphone-15-plus",
        method: "GET",
      }),
    }),
  }),
});
export const { useSingleProductQuery } = getSingleProductApi;
