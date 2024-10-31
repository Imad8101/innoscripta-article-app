import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NEWS_API_BASE_URL } from "./apiPaths";
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: NEWS_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: ({ country, category }) =>
        `top-headlines?country=${country}&category=${category}&apiKey=5d9cf3e22ec0466896fd9d083fd57c56`,
    }),
    searchNews: builder.query({
      query: ({ query }) =>
        `everything?q=${encodeURIComponent(
          query
        )}&sortBy=popularity&apiKey=5d9cf3e22ec0466896fd9d083fd57c56`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery, useSearchNewsQuery } = newsApi;
