import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import Select from "../../../UI/Select";
import { Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { resetFilters, setFilters } from "../../../store/slices/characters";
import CtaFilters from "./CtaFilters";

const filtersInitialState = {
  gender: "empty",
  species: "empty",
  status: "empty",
};

const Filters: FC = () => {
  const { filtersState, filtersOptions } = useAppSelector(
    (state) => state.characters
  );
  const { genderOptions, speciesOptions, statusOptions } = filtersOptions;
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>(
    filtersState ? filtersState : filtersInitialState
  );
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterValues((prev) => ({
      ...(!prev ? {} : prev),
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitFilters = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(setFilters(filterValues));
  };

  const handleResetFilters = () => {
    setFilterValues(filtersInitialState);
    dispatch(resetFilters());
  };

  return (
    <Container className="mt-md-4">
      <Form onSubmit={handleSubmitFilters}>
        <h3>Filters: </h3>
        <Select
          options={genderOptions}
          selectedOption={filterValues["gender"]}
          onChange={handleChange}
          name="gender"
        />
        <Select
          options={speciesOptions}
          selectedOption={filterValues["species"]}
          onChange={handleChange}
          name="species"
        />
        <Select
          options={statusOptions}
          selectedOption={filterValues["status"]}
          onChange={handleChange}
          name="status"
        />
      </Form>

      <CtaFilters
        handleResetFilters={handleResetFilters}
        handleSubmitFilters={handleSubmitFilters}
      />
    </Container>
  );
};

export default Filters;
