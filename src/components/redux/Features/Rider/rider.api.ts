import type { IResponse, IRide } from "@/type";
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
    getViewRideHistory: builder.query<IResponse<IRide>, void>({
      query: () => ({
        url: "/ride/view-ride-history",
        method: "GET",
      }),
      providesTags: ["RIDER"],
    }),
  }),
});

export const { useGetAllRiderQuery, useGetViewRideHistoryQuery } = riderApi;
