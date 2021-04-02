import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '../OrderItem/OrderItem';
import { listItems } from '../../actions/itemActions';

const Dinner = () => {
  const dispatch = useDispatch();
  const dinner = [];
  const { items, loading } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  items.map((el) => {
    el.type === 'dinner' && dinner.push(el);
  });
  return (
    <div className="container foodContainer">
      <div className="row">
        {dinner ? (
          dinner.map((el) => (
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
                      key={el.id}
                      dish={el.dish}
                      id={el._id}
                      price={el.price}
                      rating={el.rating}
                      image={el.image}
                    />
                  </div>
                </div>{' '}
                {/* food row ends */}
              </div>
            </div>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default Dinner;
