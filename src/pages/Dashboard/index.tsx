import { DashboardBox } from "./styles";
import { UserProfile } from "../../components/userCard/userCard";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Modal } from "../../components/Modal/modal";
import { EditUser } from "../../components/Forms/formUser";

export const Dashboard = () => {
  const { user, openModal, setOpenModal } = useContext(UserContext);

  return (
    <>
      {openModal && (
        <Modal setOpenModal={setOpenModal} title="Editar Informações">
          <EditUser />
        </Modal>
      )}
      <DashboardBox>
        <section className="userArea">
          <UserProfile name={user?.name} email={user?.email} />
        </section>
        <section className="contactsArea">
          <p>CONTACTS CARD</p>
        </section>
      </DashboardBox>
    </>
  );
};
