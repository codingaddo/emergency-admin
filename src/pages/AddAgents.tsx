import AddUserForm from "../features/user/AddUserForm";

const AddAgents = () => {
  return (
    <div className="  flex flex-col items-center gap-5 justify-center h-[100%]  md:p-10 py-5 min-w-[100%]">
      <h1 className="text-xl font-normal text-slate-800 p-3">Add New Agent</h1>
      <AddUserForm />
    </div>
  );
};

export default AddAgents;
