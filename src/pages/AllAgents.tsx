import UserCard from "../features/settings/UserCard";

const AllAgents = () => {
  return (
    <div className="sm:flex flex-wrap sm:gap-4 md:grid grid-cols-2 gap-5 pt-7">
      <UserCard userName="Addo Michael " />
      <UserCard userName="Addo Michael" />
      <UserCard userName="Addo Michael" />
      <UserCard userName="Addo Michael" />
      <UserCard userName="Addo Michael" />
      <UserCard userName="Addo Michael" />
      <UserCard userName="Addo Michael" />
    </div>
  );
};

export default AllAgents;
