import { baseApi } from "../../baseApi";

export const riderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),

    getAllRider: builder.query({
      query: () => ({
        url: "/ride/all-rider",
        method: "GET",
      }),
      providesTags: ["RIDER"],
    }),
  }),
});

export const { useGetAllRiderQuery } = riderApi;
