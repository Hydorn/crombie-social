import { ModalProps } from "@/utilities/types";
import styles from "./styles.module.css";

const Modal: React.FC<ModalProps> = ({ children, handleModal }) => {
  const onClose = () => {
    handleModal((prev: boolean) => !prev);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modal_window} onClick={onClose} />
      <div className={styles.modal_container}>{children}</div>
    </div>
  );
};

export default Modal;
