import React, { FC, useEffect } from "react";
import { WatchListSchema } from "../../types/watchList";
import { CloseButton, Container, Form, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteEpisode,
  loadWatchList,
  toggleWatched,
} from "../../store/slices/watchList";
import { tabHeaderGenerator } from "../../helpers/tabHeaderGenerator";

const episodeHeaders = [
  { title: "#", width: "10%" },
  { title: "Watched", width: "10%" },
  { title: "Episode Name", width: "70%" },
  { title: "Delete", width: "10%" },
];

const EpisodeList: FC = () => {
  const episodes = useAppSelector((state) => state.watchList.episodes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedWatchList = JSON.parse(
      localStorage.getItem("watch-list") || "[]"
    );
    if (savedWatchList && savedWatchList.length > 0) {
      dispatch(loadWatchList(savedWatchList));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("watch-list", JSON.stringify(episodes));
  }, [episodes]);

  return (
    <Container fluid className="mt-5">
      {!!episodes.length && (
        <Table striped bordered>
          {tabHeaderGenerator(episodeHeaders)}
          <tbody>
            {episodes.map((episode: WatchListSchema, ind: number) => {
              const { id, watched } = episode;
              return (
                <tr key={id}>
                  <td className="text-center">{ind + 1}</td>
                  <td className="text-center">
                    <Form.Check
                      type="checkbox"
                      checked={watched}
                      onChange={() => {
                        dispatch(toggleWatched({ id, watched: !watched }));
                      }}
                    />
                  </td>
                  <td>{episode.title}</td>
                  <td className="text-center">
                    <CloseButton onClick={() => dispatch(deleteEpisode(id))} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default EpisodeList;
