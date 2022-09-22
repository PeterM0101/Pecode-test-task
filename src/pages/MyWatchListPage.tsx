import React, { FC } from "react";
import { Container } from "react-bootstrap";
import InputEpisode from "../components/WatchList/InputEpisode";
import EpisodeList from "../components/WatchList/EpisodeList";

const MyWatchListPage: FC = () => {
  return (
    <Container className="mt-5">
      <InputEpisode />
      <EpisodeList />
    </Container>
  );
};

export default MyWatchListPage;
