import { baseApi } from "../../baseApi";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bookingRide: builder.mutation({
      query: (rideInfo) => ({
        url: "/ride/book-ride",
        method: "POST",
        data: rideInfo,
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

export const { useBookingRideMutation } = rideApi;
