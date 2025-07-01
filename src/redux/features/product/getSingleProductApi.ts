import { baseApi } from "../../api/baseApi";

const getSingleProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleProduct: builder.query({
      query: (slug) => ({
        url: `/product/${slug}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useSingleProductQuery } = getSingleProductApi;
