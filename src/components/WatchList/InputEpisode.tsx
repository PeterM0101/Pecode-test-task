import React, { FC, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../../store/hooks";
import { addEpisode } from "../../store/slices/watchList";
import { v4 as uuid } from "uuid";

const InputEpisode: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      episode: { value: string };
    };
    const newEpisode = target.episode.value;
    if (newEpisode.trim())
      dispatch(addEpisode({ id: uuid(), title: newEpisode, watched: false }));
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Form
      className="d-flex justify-content-between align-items-start"
      onSubmit={handleSubmit}
    >
      <Form.Control
        type="text"
        placeholder="Enter episode"
        className="me-2 flex-grow-1"
        name="episode"
        required
      />

      <Button variant="success" type="submit" style={{ minWidth: "150px" }}>
        Add Episode
      </Button>
    </Form>
  );
};

export default InputEpisode;
