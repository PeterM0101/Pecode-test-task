import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Locations from "../components/Locations/Locations";
import Filters from "../components/Locations/LocationFilters";

const CharactersPage: FC = () => {
  return (
    <Container fluid className="mt-md-4">
      <Row>
        <Col md={4} lg={3} className="mb-3">
          <Filters />
        </Col>
        <Col md={8} lg={9}>
          <Locations />
        </Col>
      </Row>
    </Container>
  );
};

export default CharactersPage;
