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
        color='danger'
        onClick={() => {
          setEtudiant();
          toggle();
        }}
      >
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>{question}</ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              apiFunction();
              toggle();
            }}
          >
            OK
          </Button>{" "}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomModal;
