import { StyledModal } from "./styles";
import { IconClose } from "./styles";
import { ReactNode } from "react";

interface ModalProp {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: ReactNode;
  children: ReactNode;
}

export const Modal = ({ setOpenModal, title, children }: ModalProp) => {
  return (
    <StyledModal>
      <div className="modalBox">
        <div className="modalHeader">
          <h4>{title}</h4>
          <IconClose onClick={() => setOpenModal(false)} />
        </div>
        {children}
      </div>
    </StyledModal>
  );
};

// export const Modal = () => {
//   return (
//     <StyledModal>
//       <div className="modalBox">
//         <div className="modalHeader">
//           <h5>Título</h5>
//           <IconClose />
//         </div>
//         <div className="formBox">AQUI VEM O FORM</div>
//       </div>
//     </StyledModal>
//   );
// };
