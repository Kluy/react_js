import React from 'react';

const Filter = (props) => {
  return (
    <div className="filter">
      <span className="filter__count">{props.count}</span>
      <input
        onChange={props.onChange}
        ctype="text"
        className="filter__input"
        value={props.filterText}
      />
    </div>
  );
};

export default Filter;
