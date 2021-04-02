import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './order.css';
import Rating from './Rating';
import { getItemById } from '../../actions/itemActions';
import Loader from '../Loader/Loader';

const OrderPage = ({ match, history }) => {
  const [data, setData] = useState({
    people: 0,
    tableNum: 0,
  });
  const { people, tableNum } = data;

  const dispatch = useDispatch();

  const { item, loading } = useSelector((state) => state.itemById);

  useEffect(() => {
    dispatch(getItemById(match.params.id));
  }, [match, dispatch]);

  const { _id, dish, price, available, image, rating } = item;

  const addToBasketHandler = () => {
    history.push(`/cart/${_id}/?qty=${people}&table=${tableNum}`);
  };
  return (
    <div className="container orderPage" style={{ paddingTop: 70 }}>
      <h1 className="text-center">Order Page</h1>
      <h3 className="pl-3">{dish && dish.toUpperCase()}</h3>
      {!loading && item ? (
        <div className="orderDetails">
          <div className="row">
            <div className="col-sm-4 box-1">
              <img src={image} className="img-fluid" />
              <span className="flex-c">
                <Rating value={rating} color="crimson" />
                <p className="flex mt-2">No Ratings</p>
              </span>
            </div>
            <div className="col-sm-7 details">
              <h3>₹{price}</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores pariatur ratione ut aliquam dolorum? Voluptas nam
                praesentium sint dolorum tempora alias architecto placeat,
                perferendis, officiis ratione incidunt inventore quis corporis.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <h3>Order For:</h3>{' '}
                  <select
                    className="form-select form-control"
                    value={people}
                    onChange={(e) =>
                      setData({ ...data, people: e.target.value })
                    }
                  >
                    <option selected>Select From Here</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <h3>Table Number</h3>{' '}
                  <input
                    type="text"
                    value={tableNum}
                    className="form-control"
                    onChange={(e) =>
                      setData({ ...data, tableNum: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex-r pt-3">
                <button
                  disabled={!available && true}
                  onClick={addToBasketHandler}
                  className="btn btn-dark"
                >
                  Add To Cart
                </button>{' '}
                <span className="pl-1 pr-1">or</span>
                <button className="btn btn-dark">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OrderPage;
