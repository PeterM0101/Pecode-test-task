import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filters from "../components/Characters/Filters/Filters";
import Characters from "../components/Characters/Characters";
import InitCharactersFilters from "../components/Characters/Filters/InitCharactersFilters";
import { useAppSelector } from "../store/hooks";

const CharactersPage: FC = () => {
  const { filtersState } = useAppSelector((state) => state.characters);
  return (
    <>
      {!filtersState && <InitCharactersFilters />}
      <Container fluid style={{ backgroundColor: "#f5f5f5" }}>
        <Row>
          <Col md={4} lg={3} className="mb-3">
            <Filters />
          </Col>
          <Col md={8} lg={9}>
            <Characters />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CharactersPage;
