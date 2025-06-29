import { baseApi } from "../../api/baseApi";

const getAllCategoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
  }),
});
export const { useAllCategoriesQuery } = getAllCategoriesApi;
