import UserTable from "./UserTable";
import { useGetAllRiderQuery } from "@/components/redux/Features/Rider/rider.api";

const UserManagement = () => {
  const { data } = useGetAllRiderQuery(undefined);

  return (
    <div>
      <h2 className="text-center text-2xl mb-10"> User Management</h2>
      {data && (
        <UserTable
          success={data.success}
          statusCode={data.statusCode}
          message={data.message}
          data={data}
        />
      )}
    </div>
  );
};

export default UserManagement;
