import React from 'react';

const Shipping = () => {
  return (
    <div className="shippingContainer">
      <h3 className="text-center pb-1">Add Your Shipping Address</h3>
      <hr />
      <form>
        <div class="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" class="form-text">
            Where to ship
          </div>
        </div>
        <div class="mb-3">
          <label>City</label>
          <input type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Postal Code</label>
          <input type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Country</label>
          <input type="text" class="form-control" required />
        </div>

        <button type="submit" class="btn btn-dark pl-3 pr-3">
          Next
        </button>
      </form>
    </div>
  );
};

export default Shipping;
