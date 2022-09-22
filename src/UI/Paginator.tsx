import React, { FC } from "react";
import { Pagination } from "react-bootstrap";
import { DOTS, usePagination } from "../hooks/usePagination";
import { v4 as uuid } from "uuid";

interface PaginatorProps {
  onPageChange: (currentPage: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

const Paginator: FC<PaginatorProps> = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    if (currentPage !== lastPage) onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage !== 1) onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev onClick={onPrevious} />
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <Pagination.Ellipsis key={uuid()} />;
        }

        return (
          <Pagination.Item
            active={pageNumber === currentPage}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        );
      })}
      <Pagination.Next onClick={onNext} />
      <Pagination.Last onClick={() => onPageChange(lastPage)} />
    </Pagination>
  );
};

export default Paginator;
