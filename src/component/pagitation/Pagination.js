import React from "react";

const Pagination = ({filteredData, currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            style={{ fontWeight: currentPage === page ? "bold" : "normal" }}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
