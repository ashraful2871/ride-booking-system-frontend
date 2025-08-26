import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IRiderResponse } from "@/type";

const UserTable = ({ data }: IRiderResponse) => {
  console.log(data);
  return (
    <div>
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
          {data?.data?.map((user) => (
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
