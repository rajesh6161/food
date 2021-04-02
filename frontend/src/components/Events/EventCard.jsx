import React from 'react';
import rest_1 from '../../assets/rest_1.jpg';
import Countdown from 'react-countdown';

const EventCard = ({ eventName, time }) => {
  const Completionist = () => (
    <span className="completed">Event has started!</span>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <h1 className="timer">
          <span className="hour">{hours}</span>:
          <span className="minute">{minutes}</span>:
          <span className="second">{seconds}</span>
        </h1>
      );
    }
  };
  return (
    <div className="eventCard">
      <div className="row">
        <div className="col-sm-6 eventImg image">
          <img src={rest_1} alt="Restaurant Image" className="img-fluid " />
        </div>
        <div className="col-sm-6 eventContent">
          <h3>{eventName}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            commodi debitis corrupti quae, voluptate maxime.
          </p>
          <Countdown date={Date.now() + time} renderer={renderer} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
