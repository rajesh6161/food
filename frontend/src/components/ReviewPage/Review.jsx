import React from 'react';

const Review = ({ name }) => {
  return (
    <div className="review">
      <img
        src={'http://placekitten.com/g/200/300'}
        alt="Profile Image"
        className="img-fluid"
      />
      <div className="mt-3">
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          exercitationem dolor, minus delectus ut dolorum.
        </p>
      </div>
    </div>
  );
};

export default Review;
