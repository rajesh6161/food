import React from 'react';
import food3 from '../../assets/food3.jpg';
import '../style.css';

const Section2 = () => {
  return (
    <div className="section2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 s2text">
            <h2>Indian Restaurant</h2>
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod voluptate quo eaque ea culpa temporibus, vero
              similique officiis maxime possimus beatae quam, nihil delectus!
            </p>
            <button className="btn btn-outline-dark">About Us</button>
          </div>
          <div className="col-md-6 image">
            <img
              src={food3}
              alt="food-image"
              className="img-fluid"
              id="food3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
