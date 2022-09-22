import React, { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { CharacterSchema } from "../../types/characters";

interface CharacterProps {
  image: string;
  name: string;
  status: string;
  character: CharacterSchema;
  getCharacterInfo: (character: CharacterSchema) => void;
}

const Character: FC<CharacterProps> = ({
  image,
  name,
  status,
  character,
  getCharacterInfo,
}) => {
  return (
    <Col lg={3} md={5} sm={12} className="mb-3">
      <Card
        style={{ height: "100%", cursor: "pointer" }}
        onClick={() => getCharacterInfo(character)}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{status}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
