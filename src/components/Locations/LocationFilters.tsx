import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilters } from "../../store/slices/locations";
import CtaFilters from "../Characters/Filters/CtaFilters";
import { LocationFiltersType } from "../../types/locations";
import { resetFilters } from "../../store/slices/locations";

const LocationFilters: FC = () => {
  const { filtersState } = useAppSelector((state) => state.locations);
  const formRef = useRef<HTMLFormElement>(null);
  const [filterValues, setFilterValues] = useState<LocationFiltersType>(
    filtersState || {}
  );
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    formRef.current?.reset();
    setFilterValues({});
    dispatch(resetFilters());
  };

  return (
    <Container className="mt-md-4">
      <Form onSubmit={handleSubmitFilters} autoComplete="off" ref={formRef}>
        <h3>Filters: </h3>
        <Form.Group className="mb-3">
          <Form.Label>Location name: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the location"
            name="name"
            onChange={handleChange}
            value={(filterValues as any).name || ""}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location type: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the type of the location"
            name="type"
            onChange={handleChange}
            value={(filterValues as any).type || ""}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dimension of Location: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the dimension"
            name="dimension"
            onChange={handleChange}
            value={(filterValues as any).dimension || ""}
          />
        </Form.Group>
      </Form>

      <CtaFilters
        handleResetFilters={handleResetFilters}
        handleSubmitFilters={handleSubmitFilters}
      />
    </Container>
  );
};

export default LocationFilters;
