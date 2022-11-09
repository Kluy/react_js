import React from 'react';

const Pagination = (props) => {
  const pages = Math.ceil(props.totalItems / props.itemsPerPage);
  let isPrevPageAvailable = false;
  let isNextPageAvailable = pages > 1;

  console.log(isNextPageAvailable);

  return (
    <div className="pagination">
      <button className="btn" onClick={props.goPrev}>
        ←
      </button>
      <span className="pagination__page">{props.currentPage}</span>
      <button className="btn" onClick={props.goNext}>
        →
      </button>
    </div>
  );
};

export default Pagination;
