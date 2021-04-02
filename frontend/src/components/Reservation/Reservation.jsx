import React, { useState } from 'react';
import food3 from '../../assets/food3.jpg';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Reservation = () => {
  const [reservationData, setReservationData] = useState({
    fullName: '',
    email: '',
    bookingDate: new Date(),
    person: 0,
    phone: '',
  });
  const [alert, setAlert] = useState(false);

  const { fullName, email, bookingDate, person, phone } = reservationData;

  const CustomInput = ({ value, onClick }) => (
    <button className="btn btn-dark btn-lg btn-block mb-3" onClick={onClick}>
      {value}
    </button>
  );
  const CustomTimeInput = ({ date, value, onChange }) => (
    <input
      value={value}
      onChange={(e) => {
        e.preventDefault();
        onChange(e.target.value);
      }}
      style={{ border: 'solid 1px pink', borderRadius: 3 }}
    />
  );

  return (
    <div className="section2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 4000);
        }}
      >
        <div className="container">
          {fullName.length && alert ? (
            <div className="alert alert-success" role="alert">
              {`Table Booked for ${fullName} for the date: ${bookingDate}`}
            </div>
          ) : (
            ''
          )}
          <div className="row">
            <div className="col-md-6 s2text">
              <h2>Make Reservation</h2>
              <h1>Book Table</h1>
              <div className="row">
                <div className="col-sm-12">
                  <p style={{ marginBottom: 5, fontSize: 20 }}>Date & Time</p>
                  <DatePicker
                    selected={bookingDate}
                    showTimeInput
                    onChange={(e) => {
                      setReservationData({
                        ...reservationData,
                        bookingDate: e,
                      });
                    }}
                    customInput={<CustomInput />}
                    customTimeInput={<CustomTimeInput />}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>

                <div className="col-sm-6 mb-3">
                  <input
                    className="form-control "
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={fullName}
                    required
                    onChange={(e) =>
                      setReservationData({
                        ...reservationData,
                        fullName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) =>
                      setReservationData({
                        ...reservationData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                    required
                    onChange={(e) =>
                      setReservationData({
                        ...reservationData,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <select
                    className="custom-select"
                    required
                    onChange={(e) =>
                      setReservationData({
                        ...reservationData,
                        person: e.target.value,
                      })
                    }
                  >
                    <option selected>Persons</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-outline-danger"
                value="Book Table"
              />
            </div>

            <div className="col-md-6 image resvImage">
              <img
                src={food3}
                alt="food-image"
                className="img-fluid"
                id="food3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
