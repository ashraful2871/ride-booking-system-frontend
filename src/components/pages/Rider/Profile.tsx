import { useUserInfoQuery } from "@/components/redux/Features/Auth/auth.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Loading from "@/components/Loading/Loading";
import { Link } from "react-router";
import { format } from "date-fns";

const Profile = () => {
  const { data, isLoading } = useUserInfoQuery(undefined);
  console.log(data);
  if (!data?.data) {
    return (
      <div className="flex justify-center items-center h-[60vh] ">
        No profile data found.
      </div>
    );
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto mt-10 px-4">
      <Card className="shadow-lg rounded-2xl border border-gray-200">
        <CardHeader className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 border-2 border-blue-500 shadow-md">
            <AvatarImage src={""} alt={data.data.name} />
            <AvatarFallback>
              <User className="w-8 h-8 " />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-2xl font-bold ">
            {data.data.name}
          </CardTitle>
          <Badge variant="secondary" className="mt-2">
            {data.data.role}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4 ">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Email</span>
            <span className="">{data.data.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Phone</span>
            <span className="">{data.data.phone}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Status</span>
            <span className="">{data.data.isActive}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Joined</span>
            <span className="">{format(data.data.createdAt, "PP")}</span>
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <Button>
              <Link to="/rider/edit-profile">Edit Profile</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
