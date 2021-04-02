import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const OrderItem = ({ dish, id, price, rating }) => {
  return (
    <>
      <Link to={`/order/${id}`}>
        <h3>{dish}</h3>
      </Link>
      <p>
        Paneer Butter Masala is one of India’s most popular paneer gravy recipe.
      </p>
      <h3>₹{price}</h3>
      <Rating value={rating} color="red" />
    </>
  );
};

export default OrderItem;
