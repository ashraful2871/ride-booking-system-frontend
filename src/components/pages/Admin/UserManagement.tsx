import UserTable from "./UserTable";
import { useGetAllRiderQuery } from "@/components/redux/Features/Rider/rider.api";

const UserManagement = () => {
  const { data } = useGetAllRiderQuery(undefined);

  return (
    <div>
      <h2>i am user UserManagement</h2>
      <UserTable data={data}></UserTable>
    </div>
  );
};

export default UserManagement;
