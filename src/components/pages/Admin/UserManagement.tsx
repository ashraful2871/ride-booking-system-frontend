import Loading from "@/components/Loading/Loading";
import { useGetAllRiderQuery } from "@/components/redux/Features/Rider/rider.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IRider } from "@/type";
const UserManagement = () => {
  const { data, isLoading } = useGetAllRiderQuery(undefined);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center text-2xl mb-10"> User Management</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Role</TableHead>
            <TableHead className="text-center">Block Status</TableHead>
            <TableHead className="text-center">Active Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            data?.data?.map((user: IRider) => (
              <TableRow className="text-center" key={user?._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {user.isDeleted ? (
                    <span className="text-red-500">BLOCKED</span>
                  ) : (
                    <span className="text-green-500">ACTIVE</span>
                  )}
                </TableCell>
                <TableCell>{user.isActive}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
