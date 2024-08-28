import Modal from "../components/Modal";
import UserCard from "../features/settings/UserCard";
import AddUserForm from "../features/user/AddUserForm";
import { openModal, closeModal } from "../features/slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import ConfirmDelete from "../features/user/ConfirmDelete";
import { useGetAgents } from "../hooks/useGetAgents";
import EditUserForm from "../features/user/EditUserForm";

const AllAgents = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalContent = useSelector((state: RootState) => state.modal.content);
  const { data, isLoading } = useGetAgents();
  if (isLoading) {
    console.log(isLoading);
  }
  if (data) {
    console.log(data.data.agents);
  }
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());

  const handleDeleteUser = () => {
    dispatch(
      openModal(
        <>
          <ConfirmDelete onClose={close} />
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
      <div className="sm:flex flex-wrap sm:gap-4 md:grid grid-cols-2 gap-5 pt-7">
        {isLoading ? (
          <div>Loading...</div>
        ) : data.data.agents === 0 ? (
          <h2>No Agents found</h2>
        ) : (
          data.data.agents.map((agent) => (
            <UserCard
              key={agent._id}
              userName={agent.name}
              onDelete={() => handleDeleteUser()}
              onEdit={() => handleEditUser(agent)}
            />
          ))
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={close}>
        {modalContent}
      </Modal>
    </>
  );
};

export default AllAgents;
