import { useDispatch, useSelector } from "react-redux";
import FormBtn from "../../ui/FormBtn";
import ComplaintContainer from "./ComplaintContainer";
import { RootState } from "../../store";
import { closeModal, openModal } from "../slices/modalSlice";
import ConfirmDelete from "../user/ConfirmDelete";
import Modal from "../../components/Modal";
import MyMap from "./MyMap";

interface Sender {
  _id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
}

interface Report {
  id: string;
  agency: string;
  coordinates: number[];
  createdAt: string;
  description: string;
  mediaUrl: string;
  sender: Sender;
  status: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const ComplainPreview = ({ report }) => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalContent = useSelector((state: RootState) => state.modal.content);
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());
  const destination = {
    lat: 5.6037,
    lng: -0.187,
  };

  const senderCoordinate = {
    lat: report?.coordinates[0],
    lng: report?.coordinates[1],
  };

  console.log(report?.coordinates);

  const handleDelete = () => {
    dispatch(
      openModal(
        <>
          <ConfirmDelete onClose={close} id={report._id} />
        </>
      )
    );
  };
  return (
    <div className="flex flex-col gap-7 pb-32">
      <div className="flex lg:flex-row sm:flex-col-reverse  shadow rounded-md px-4 justify-between items-center">
        <div className="flex flex-col gap-2 py-5 ">
          <ComplaintContainer label="Id#" text={report?._id} />
          <ComplaintContainer
            label="Sender"
            text={report?.sender?.name || "N/A"}
          />
          <ComplaintContainer label="Location" text="Sunyani Fiapre" />
          <ComplaintContainer
            label="phone"
            text={report?.sender?.phone || "N/A"}
          />
          <ComplaintContainer
            label="Email"
            text={report?.sender?.email || "N/A"}
          />

          <ComplaintContainer label="Status" text={report?.status} />
        </div>
        <div>Sender image</div>
      </div>
      <div>
        <h2 className=" text-lg">Report Description</h2>
        <p className=" capitalize">{report?.description || "N/A"}</p>
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
      {report?.coordinates.length !== 0 ? (
        <div className=" sm:h-[80vh] lg:h-[80vh]">
          <MyMap destination={senderCoordinate || destination} />
        </div>
      ) : (
        <p className="text-center text-2xl text-blue-950">
          No coordinates provided.
        </p>
      )}
    </div>
  );
};

export default ComplainPreview;
