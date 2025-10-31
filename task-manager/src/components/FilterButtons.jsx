import React from 'react';

function FilterButtons({ setFilter, clearCompleted }) {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default FilterButtons;