import { useGetAllDriverQuery } from "@/components/redux/Features/Biker/biker.api";

const ApprovedStatus = () => {
  const { data } = useGetAllDriverQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>i am approved status</h1>
    </div>
  );
};

export default ApprovedStatus;
