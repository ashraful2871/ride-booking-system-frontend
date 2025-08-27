import Loading from "@/components/Loading/Loading";
import {
  useDriverApprovedStatusMutation,
  useDriverSuspendStatusMutation,
  useGetAllDriverQuery,
} from "@/components/redux/Features/Biker/biker.api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IDriver } from "@/type";

const ApprovedStatus = () => {
  const { data, isLoading } = useGetAllDriverQuery(undefined);
  const [approvedStatus] = useDriverApprovedStatusMutation();
  const [suspendStatus] = useDriverSuspendStatusMutation();

  const handleStatusChange = async (id: string, value: string) => {
    try {
      if (value === "APPROVED") {
        const res = await approvedStatus(id);
        console.log(res);
      }
      if (value === "SUSPENDED") {
        const res = await suspendStatus(id);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-2xl mb-10">Driver Approved Status</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Vehicle Number</TableHead>
            <TableHead className="text-center">Vehicle Type</TableHead>
            <TableHead className="text-center">NID No.</TableHead>
            <TableHead className="text-center">License Number</TableHead>
            <TableHead className="text-center">Active Status</TableHead>
            <TableHead className="text-center">Approved Status</TableHead>
            <TableHead className="text-center">Total Earning</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((driver: IDriver) => (
            <TableRow className="text-center" key={driver._id}>
              <TableCell>{driver.user}</TableCell>
              <TableCell>{driver.vehicleNumber}</TableCell>
              <TableCell>{driver.vehicleType}</TableCell>
              <TableCell>{driver.nationalId}</TableCell>
              <TableCell>{driver.licenseNumber}</TableCell>
              <TableCell>{driver.isOnline ? "ACTIVE" : "INACTIVE"}</TableCell>
              <TableCell>{driver.approvedStatus}</TableCell>
              <TableCell>$ {driver.totalEarning.toFixed(2)}</TableCell>
              <TableCell>
                <Select
                  onValueChange={(value) =>
                    handleStatusChange(driver._id, value)
                  }
                >
                  <SelectTrigger className="w-full"></SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="APPROVED">APPROVED</SelectItem>
                      <SelectItem value="PENDING">PENDING</SelectItem>
                      <SelectItem value="SUSPENDED">SUSPENDED</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApprovedStatus;
