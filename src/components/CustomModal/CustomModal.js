import React, { PureComponent } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
const CustomModal = ({
  toggle,
  modal,
  className,
  buttonLabel,
  question,
  apiFunction,
  setEtudiant,
}) => {
  return (
    <div>
      <Button
        style={{ right: "2%", marginRight: 7 }}
        className='btn btn-danger btn-sm'
        color='danger'
        onClick={() => {
          setEtudiant();
          toggle();
        }}
      >
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Confirmer Action</ModalHeader>
        <ModalBody>{question}</ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              apiFunction();
              toggle();
            }}
          >
            Confimer
          </Button>{" "}
          <Button color='secondary' onClick={toggle}>
            x
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomModal;
