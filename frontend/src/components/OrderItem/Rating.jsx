import React from 'react';

const Rating = ({ value, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'bi bi-star-fill'
              : value >= 0.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'bi bi-star-fill'
              : value >= 1.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'bi bi-star-fill'
              : value >= 2.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'bi bi-star-fill'
              : value >= 3.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'bi bi-star-fill'
              : value >= 4.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

export default Rating;
