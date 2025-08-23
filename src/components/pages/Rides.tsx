import { Badge, Car, Clock, DollarSign, MapPin } from "lucide-react";
import { useGetAllRideQuery } from "../redux/Features/Ride/ride.api";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { IRide } from "@/type/ride.type";
import type { IRideResponse } from "@/type";

const Rides = () => {
  const { data }: IRideResponse = useGetAllRideQuery(undefined);
  console.log(data);
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data?.data?.map((ride: IRide) => (
        <Card
          key={ride._id}
          className="rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Ride</CardTitle>
              <Badge>{ride.status}</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">
                {ride.pickupLocation.address}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">
                {ride.destinationLocation.address}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-semibold">
                ${ride.fare.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-4 w-4" />
              <span className="text-xs">{ride.requestedAt}</span>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            {ride.driver ? (
              <span className="text-xs text-gray-500">
                Driver:{ride.driver}{" "}
              </span>
            ) : (
              <span className="text-xs text-gray-400 italic">
                No driver assigned
              </span>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Rides;
