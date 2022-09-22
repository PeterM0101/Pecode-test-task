import React, { FC } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { CharacterSchema } from "../../types/characters";

interface DetailsCharacterInfoProps {
  show: boolean;
  handleClose: () => void;
  info: CharacterSchema;
}

const DetailsCharacterInfo: FC<DetailsCharacterInfoProps> = ({
  show,
  handleClose,
  info,
}) => {
  const { name, image, gender, status, species, location } = info;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={image} alt={name} />
        <p className="">
          <b>Status:</b> {status}
        </p>
        <p className="">
          <b>Gender:</b> {gender}
        </p>
        <p className="">
          <b>Species:</b> {species}
        </p>
        <p className="">
          <b>Location:</b> {location?.name}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsCharacterInfo;
