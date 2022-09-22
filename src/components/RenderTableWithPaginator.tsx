import React, { FC, useEffect } from "react";

import { Container } from "react-bootstrap";
import { useAppDispatch } from "../store/hooks";
import { fetchData } from "../services/fetchData";
import Paginator from "../UI/Paginator";
import RenderTable from "../UI/RenderTable";
import { TableSchema } from "../types/table";
import { UnionLocationsNEpisodesType } from "../store/slices/locations";

interface RenderTableWithPaginatorProps {
  currentURL: string | null;
  currentPage: number;
  count: number;
  isLoading: boolean;
  data: any;
  actions: UnionLocationsNEpisodesType;
  name: string;
  tableSchema: TableSchema[];
}

const RenderTableWithPaginator: FC<RenderTableWithPaginatorProps> = ({
  count,
  currentPage,
  currentURL,
  isLoading,
  data,
  name,
  actions,
  tableSchema,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData(currentURL!));
    // eslint-disable-next-line
  }, [currentURL]);

  const handlePageChange = (page: number) => {
    dispatch(actions.setCurrentPage(page));
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <Paginator
        onPageChange={handlePageChange}
        totalCount={count}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={20}
      />
      {data.length > 0 ? (
        <RenderTable data={data} tableStructure={tableSchema} />
      ) : (
        !isLoading && (
          <p>
            <strong>{`${name} list is empty...`}</strong>
          </p>
        )
      )}
    </Container>
  );
};

export default RenderTableWithPaginator;
