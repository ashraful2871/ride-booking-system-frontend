import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, MapPinned, Car } from "lucide-react";
import { format } from "date-fns";
import { useGetDriverEarningHistoryQuery } from "@/components/redux/Features/Biker/biker.api";
import type { IDriverRide } from "@/type/driver.type";

const DriverEarning = () => {
  const { data, isLoading } = useGetDriverEarningHistoryQuery(undefined);
  console.log(data);

  if (isLoading) return <p className="text-center py-6">Loading...</p>;
  if (!data) return <p className="text-center py-6">No data found</p>;

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-4">
        Driver Earning History
      </h2>

      {/* Total Earnings */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        <Card className="flex-1 text-center p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardTitle className="text-lg font-semibold text-muted-foreground">
            Total Stored Earnings
          </CardTitle>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              ${data.data.totalEarningStored.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card className="flex-1 text-center p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardTitle className="text-lg font-semibold text-muted-foreground">
            Total Calculated Earnings
          </CardTitle>
          <CardContent>
            <p className="text-2xl font-bold text-blue-600">
              ${data.data.totalEarningsCalculated.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Ride History */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.rides.map((ride: IDriverRide) => (
          <Card
            key={ride._id}
            className="shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2 text-lg font-medium">
                <Car className="h-5 w-5 text-primary" />
                Ride {ride.status}
              </CardTitle>
              <Badge
                variant={
                  ride.status === "COMPLETED"
                    ? "default"
                    : ride.status === "CANCELLED"
                    ? "destructive"
                    : "secondary"
                }
              >
                {ride.status}
              </Badge>
            </CardHeader>

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

              {/* Fare & Requested At */}
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

export default DriverEarning;
