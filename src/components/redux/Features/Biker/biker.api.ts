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

    getAllRider: builder.query({
      query: () => ({
        url: "/ride/all-rider",
        method: "GET",
      }),
      providesTags: ["RIDER"],
    }),
  }),
});

export const { useAcceptRideMutation, useRejectRideMutation } = bikerApi;
