import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://157.230.240.97:9999/api/v1/" }),
  tagTypes: ["donations", "testimonials", "comments", "volunteers"],
  endpoints: () => ({}),
});
