import styles from "./styles.module.css";

type ModalProps = {
  children: React.ReactNode;
  handleModal: Function;
};
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
