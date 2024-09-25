import Modal from "../components/Modal";
import UserCard from "../features/settings/UserCard";
import { openModal, closeModal } from "../features/slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import ConfirmDelete from "../features/user/ConfirmDelete";
import { useGetAgents } from "../hooks/useGetAgents";
import EditUserForm from "../features/user/EditUserForm";
import { useAuth } from "../hooks/getUser";
import { useDeleteAgent } from "../hooks/useDeleteAgent";
import Spinner from "../ui/Spinner";

const AllAgents = () => {
  const { user } = useAuth();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalContent = useSelector((state: RootState) => state.modal.content);
  const { mutate: deleteFn, isDeleting } = useDeleteAgent();
  const { data, isLoading } = useGetAgents();
  if (isLoading) {
    console.log(isLoading);
  }
  if (data) {
    // console.log(data.data.agents);
  }
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());

  const handleDeleteUser = (agentId: string) => {
    dispatch(
      openModal(
        <>
          <ConfirmDelete
            mutateFunction={deleteFn}
            id={agentId}
            isMutating={isDeleting}
            onClose={close}
          />
        </>
      )
    );
  };

  const handleEditUser = (data) => {
    dispatch(
      openModal(
        <div className="h-[400px] flex items-center">
          <EditUserForm data={data} onClose={close} />
        </div>
      )
    );
  };

  return (
    <>
      {user?.data?.user?.role === "admin" ? (
        <div className="sm:flex flex-wrap sm:gap-4 md:grid grid-cols-2 gap-5 pt-7">
          {isLoading ? (
            <div className=" absolute right-[40%] ">
              <Spinner />
            </div>
          ) : data.data.agents === 0 ? (
            <h2>No Agents found</h2>
          ) : (
            data.data.agents.map((agent) => (
              <UserCard
                agent={{ agent }}
                key={agent._id}
                userName={agent.name}
                onDelete={() => handleDeleteUser(agent._id)}
                onEdit={() => handleEditUser(agent)}
              />
            ))
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-bold text-blue-950 text-2xl">My Account</h1>
          <div>
            <p>{user.data.user.name}</p>
            <p>{user.data.user.email}</p>
            <p>{user.data.user.phone}</p>
          </div>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={close}>
        {modalContent}
      </Modal>
    </>
  );
};

export default AllAgents;
