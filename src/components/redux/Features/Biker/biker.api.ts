import type { IDriver, IResponse } from "@/type";
import { baseApi } from "../../baseApi";

export const bikerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    acceptRide: builder.mutation({
      query: (id) => ({
        url: `/driver/accept/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE"],
    }),
    rejectRide: builder.mutation({
      query: (id) => ({
        url: `/driver/reject/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE"],
    }),

    updateRideStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/driver/status/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["RIDE"],
    }),
    driverApprovedStatus: builder.mutation({
      query: (id) => ({
        url: `/driver/approved-driver-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["BIKER"],
    }),
    driverSuspendStatus: builder.mutation({
      query: (id) => ({
        url: `/driver/suspended-driver-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["BIKER"],
    }),

    getAllDriver: builder.query<IResponse<IDriver>, void>({
      query: () => ({
        url: "/driver/all-drivers",
        method: "GET",
      }),
      providesTags: ["BIKER"],
    }),
  }),
});

export const {
  useAcceptRideMutation,
  useRejectRideMutation,
  useUpdateRideStatusMutation,
  useGetAllDriverQuery,
  useDriverApprovedStatusMutation,
  useDriverSuspendStatusMutation,
} = bikerApi;
