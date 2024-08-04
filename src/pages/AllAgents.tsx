import Modal from "../components/Modal";
import UserCard from "../features/settings/UserCard";
import AddUserForm from "../features/user/AddUserForm";
import { openModal, closeModal } from "../features/slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import ConfirmDelete from "../features/user/ConfirmDelete";

const AllAgents = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalContent = useSelector((state: RootState) => state.modal.content);
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

  const handleEditUser = () => {
    dispatch(
      openModal(
        <div className="h-[400px] flex items-center">
          <AddUserForm />
        </div>
      )
    );
  };

  return (
    <>
      <div className="sm:flex flex-wrap sm:gap-4 md:grid grid-cols-2 gap-5 pt-7">
        <UserCard
          userName="Addo Michael"
          onDelete={() => handleDeleteUser()}
          onEdit={() => handleEditUser()}
        />
        <UserCard
          userName="Addo Michael"
          onDelete={() => handleDeleteUser()}
          onEdit={() => handleEditUser()}
        />
        <UserCard
          userName="Addo Michael"
          onDelete={() => handleDeleteUser()}
          onEdit={() => handleEditUser()}
        />
        <UserCard
          userName="Addo Michael"
          onDelete={() => handleDeleteUser()}
          onEdit={() => handleEditUser()}
        />
        <UserCard
          userName="Addo Michael"
          onDelete={() => handleDeleteUser()}
          onEdit={() => handleEditUser()}
        />
        <UserCard
          userName="Addo Michael"
          onDelete={() => handleDeleteUser()}
          onEdit={() => handleEditUser()}
        />
        <UserCard
          userName="Addo Michael"
          onDelete={() => handleDeleteUser()}
          onEdit={() => handleEditUser()}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={close}>
        {modalContent}
      </Modal>
    </>
  );
};

export default AllAgents;
