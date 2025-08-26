import type { IRideResponse } from "@/type";
import { baseApi } from "../../baseApi";
import type { IRide } from "@/type/ride.type";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),

    getAllRide: builder.query<IRideResponse<IRide>, void>({
      query: () => ({
        url: "/ride/all-rides",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    allLocation: builder.query({
      query: () => ({
        url: "/location/all-location",
        method: "GET",
      }),
      providesTags: ["LOCATION"],
    }),
  }),
});

export const { useGetAllRideQuery, useAllLocationQuery } = rideApi;
