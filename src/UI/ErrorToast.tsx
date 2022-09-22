import React, { FC } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

interface ErrorToastProps {
  errorMessage: string;
  show: boolean;
  setShow: () => void;
}

const ErrorToast: FC<ErrorToastProps> = ({ errorMessage, setShow, show }) => {
  return (
    <ToastContainer position="top-end" className="mt-5" style={{ zIndex: 33 }}>
      <Toast
        className="d-inline-block m-1"
        bg="danger"
        onClose={setShow}
        show={show}
      >
        <Toast.Header>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{errorMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ErrorToast;
