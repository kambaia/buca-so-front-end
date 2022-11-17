import { CircularProgress, Skeleton } from "@mui/material";
import React, { ReactElement } from "react";
import { Container } from "./styles";

const Loading = (): ReactElement => {
  // return <CircularProgress />;
  return (
    <Container>
        <CircularProgress />
    </Container>
  );
};

export default Loading;
