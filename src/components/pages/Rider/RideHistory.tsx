import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useGetViewRideHistoryQuery } from "@/components/redux/Features/Rider/rider.api";
import { format } from "date-fns";
import { Car, MapPin, MapPinned } from "lucide-react";
import type { IRide } from "@/type";

const RideHistory = () => {
  const { data, isLoading } = useGetViewRideHistoryQuery(undefined);

  if (isLoading) {
    return (
      <p className="text-center text-muted-foreground">Loading rides...</p>
    );
  }

  if (!data?.data?.length) {
    return (
      <p className="text-center text-muted-foreground mt-10">
        No ride history found.
      </p>
    );
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
        Ride History
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.data?.map((ride: IRide) => (
          <Card
            key={ride._id}
            className="shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Header */}
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                {ride.status}
              </CardTitle>
              <Badge
                variant={
                  ride.status === "COMPLETED"
                    ? "default"
                    : ride.status === "CANCELLED" || ride.status === "REJECTED"
                    ? "destructive"
                    : "secondary"
                }
              >
                {ride.status}
              </Badge>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-3">
              {/* Pickup */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Pickup</p>
                  <p className="font-medium">{ride.pickupLocation.address}</p>
                </div>
              </div>

              {/* Destination */}
              <div className="flex items-start gap-3">
                <MapPinned className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Destination</p>
                  <p className="font-medium">
                    {ride.destinationLocation.address}
                  </p>
                </div>
              </div>

              <Separator />

              {/* Fare + Requested Time */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Fare</p>
                  <p className="font-semibold">${ride.fare.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Requested At</p>
                  <p className="font-semibold">
                    {format(new Date(ride.requestedAt), "dd MMM yyyy, HH:mm")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RideHistory;
