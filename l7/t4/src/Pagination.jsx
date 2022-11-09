import React from 'react';

const Pagination = (props) => {
  console.log(props.currentPage);
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
