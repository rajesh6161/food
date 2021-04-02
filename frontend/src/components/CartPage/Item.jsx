import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const { id, dish, image, price, available, qty, table } = data;

  const removeHandler = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="row">
      <div className="col-sm-3">
        <img src={image} className="img-fluid" />
      </div>
      <div className="col-sm-3">
        <h5>{dish}</h5>
        <button className="btn btn-danger" onClick={removeHandler}>
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
      <div className="col-sm-3">
        <h5>
          Price: {qty} &times; ₹{price}
        </h5>
      </div>
      <div className="col-sm-3">
        <div className="row">
          <div className="col">
            <h5>
              For: {qty}
              {qty > 1 ? <> persons</> : <> person</>}
            </h5>
          </div>
          <div className="col">
            <h5>Table Number: {table}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
