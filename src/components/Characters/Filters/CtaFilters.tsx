import React, { FC, SyntheticEvent } from "react";
import { Button, Container } from "react-bootstrap";

interface CtaFiltersProps {
  handleResetFilters: () => void;
  handleSubmitFilters: (e: SyntheticEvent) => void;
}

const CtaFilters: FC<CtaFiltersProps> = ({
  handleResetFilters,
  handleSubmitFilters,
}) => {
  return (
    <Container className="d-flex justify-content-evenly mt-3">
      <Button
        type="submit"
        variant="primary"
        onClick={(e: SyntheticEvent) => {
          handleSubmitFilters(e);
        }}
      >
        Search
      </Button>
      <Button type="button" variant="danger" onClick={handleResetFilters}>
        Reset Filter
      </Button>
    </Container>
  );
};

export default CtaFilters;
