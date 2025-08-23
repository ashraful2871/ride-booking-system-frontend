import { Car, Clock, DollarSign, MapPin } from "lucide-react";
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
import { Button } from "../ui/button";
import {
  useAcceptRideMutation,
  useRejectRideMutation,
} from "../redux/Features/Biker/biker.api";
import { Badge } from "../ui/badge";

const Rides = () => {
  const { data }: IRideResponse = useGetAllRideQuery(undefined);
  const [acceptRide] = useAcceptRideMutation();
  const [rejectRide] = useRejectRideMutation();
  const handleAccept = async (id: string) => {
    console.log(id);
    try {
      const res = await acceptRide(id).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (id: string) => {
    console.log(id);
    try {
      const res = await rejectRide(id).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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
              <Badge variant="default" className="text-sm font-medium">
                {ride.status === ("PENDING" as string) && "Pending"}
                {ride.status === ("ACCEPTED" as string) && "Accepted"}
                {ride.status === ("IN_PROGRESS" as string) && "In Transit"}
                {ride.status === ("PICKED_UP" as string) && "Picked Up"}
                {ride.status === ("COMPLETED" as string) && "Completed"}
                {ride.status === ("REJECTED" as string) && "Rejected"}
                {ride.status === ("CANCELLED" as string) && "Cancelled"}
              </Badge>
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
            <div>
              {ride.driver ? (
                <span className="text-xs text-gray-500">
                  Driver: {ride.driver}{" "}
                </span>
              ) : (
                <span className="text-xs text-gray-400 italic">
                  No driver assigned
                </span>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-5">
            <Button
              onClick={() => handleAccept(ride._id)}
              variant={"default"}
              className="cursor-pointer"
            >
              Accept
            </Button>
            <Button
              onClick={() => handleReject(ride._id)}
              variant={"destructive"}
              className="cursor-pointer"
            >
              Reject
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Rides;
