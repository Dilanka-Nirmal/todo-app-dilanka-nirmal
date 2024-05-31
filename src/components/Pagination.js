import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

// Pagination component
const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <PaginationWrapper>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginationWrapper>
  );
};

// Styled components
const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
}

  .pagination li {
    margin: 0 5px;
  }

  .pagination li a {
    padding: 8px 12px;
    border: 1px solid #ddd;
    color: #000;
    cursor: pointer;
    border-radius: 4px;
  }

  .pagination li.active a {
    color: #BC006D;
    border: 1px solid #BC006D;
  }

  .pagination li.disabled a {
    cursor: not-allowed;
    color: #757575;
  }
`;

export default Pagination;
