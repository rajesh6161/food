import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '../OrderItem/OrderItem';
import { listItems } from '../../actions/itemActions';
import Loader from '../Loader/Loader';

const Lunch = () => {
  const dispatch = useDispatch();
  const lunch = [];
  const { items, loading, error } = useSelector((state) => state.items);
console.log(items)
  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  items && items.map((el) => {
    el.type === 'lunch' && lunch.push(el);
  });

  return (
    <div className="container foodContainer">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div className="row">
          {lunch.map((el) => (
            <div className="col-sm-6 pb-5" key={el.id}>
              <div className="row">
                <div className="foodRow">
                  <div className="col-sm-5 image">
                    <img
                      src={el.image}
                      className="img-fluid"
                      alt="dish image"
                    />
                  </div>
                  <div className="col-sm-7 details">
                    <OrderItem
                      dish={el.dish}
                      id={el._id}
                      price={el.price}
                      rating={el.rating}
                    />
                  </div>
                </div>{' '}
                {/* food row ends */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lunch;
