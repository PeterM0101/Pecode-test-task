import React, { FC } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const StyledOverlayWithSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 33;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;

const OverlayWithSpinner: FC = () => {
  return (
    <StyledOverlayWithSpinner>
      <Spinner />
    </StyledOverlayWithSpinner>
  );
};

export default OverlayWithSpinner;
