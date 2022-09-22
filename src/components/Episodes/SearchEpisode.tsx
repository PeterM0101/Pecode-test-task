import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { episodesSlice } from "../../store/slices/episodes";

const SearchEpisode: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.episodes.filterByName);
  const [searchValue, setSearchValue] = useState<string>(filter.name || "");

  const submitSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(episodesSlice.actions.setFilter(searchValue));
  };

  return (
    <Container>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Episode Name"
          defaultValue={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
          }}
        />
        <Button variant="primary" onClick={submitSearch}>
          Search
        </Button>
      </InputGroup>
    </Container>
  );
};

export default SearchEpisode;
