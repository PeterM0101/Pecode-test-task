import React, { FC } from "react";
import { Container } from "react-bootstrap";
import SearchEpisode from "../components/Episodes/SearchEpisode";
import Episodes from "../components/Episodes/Episodes";

const EpisodesPage: FC = () => {
  return (
    <Container fluid className="mt-3">
      <SearchEpisode />
      <Episodes />
    </Container>
  );
};

export default EpisodesPage;
