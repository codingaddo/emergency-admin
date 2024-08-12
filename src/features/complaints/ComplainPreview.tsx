import { useDispatch, useSelector } from "react-redux";
import FormBtn from "../../ui/FormBtn";
import ComplaintContainer from "./ComplaintContainer";
import { RootState } from "../../store";
import { closeModal, openModal } from "../slices/modalSlice";
import ConfirmDelete from "../user/ConfirmDelete";
import Modal from "../../components/Modal";
import MyMap from "./MyMap";

const ComplainPreview = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalContent = useSelector((state: RootState) => state.modal.content);
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());
  const destination = {
    lat: 5.6037,
    lng: -0.187,
  };

  const handleDelete = () => {
    dispatch(
      openModal(
        <>
          <ConfirmDelete onClose={close} />
        </>
      )
    );
  };
  return (
    <div className="flex flex-col gap-7 pb-32">
      <div className="flex lg:flex-row sm:flex-col-reverse  shadow rounded-md px-4 justify-between items-center">
        <div className="flex flex-col gap-2 py-5 ">
          <ComplaintContainer label="Id#" text="124532589554" />
          <ComplaintContainer label="Sender" text="Addo Michael" />
          <ComplaintContainer label="Location" text="Sunyani Fiapre" />
          <ComplaintContainer label="phone" text="0551817972" />
          <ComplaintContainer label="Email" text="xyz@gmail.com" />

          <ComplaintContainer label="Status" text="Pending" />
        </div>
        <div>Sender image</div>
      </div>
      <div>
        <h2 className=" text-lg">Report Description</h2>
        <p>
          Somone took my car when I was taking piss at the fueling station
          washroom at fiapre, car number, GW-415-23, blue color
        </p>
      </div>
      <div>
        <h2>Attach file</h2>
        <button>file</button>
      </div>
      <div className="flex gap-5">
        <FormBtn
          label="Resolved"
          disable={false}
          onClick={() => console.log("helo")}
        />
        <FormBtn
          del={true}
          label="Delete "
          disable={false}
          onClick={handleDelete}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={close}>
        {modalContent}
      </Modal>

      <div className=" sm:h-[80vh] lg:h-[80vh]">
        <MyMap destination={destination} />
      </div>
    </div>
  );
};

export default ComplainPreview;
