export type ModalProps = {
  children: React.ReactNode;
  handleModal: Function;
};

export type RegisterFormType = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};
