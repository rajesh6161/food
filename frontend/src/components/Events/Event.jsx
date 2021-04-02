import React from 'react';
import EventCard from './EventCard';

const Event = () => {
  const events = {
    eventDetails: [
      { name: 'Event-2', time: 3600000 },
      { name: 'Event-3', time: 600000 },
      { name: 'Event-4', time: 9000000 },
    ],
  };
  const { eventDetails } = events;
  return (
    <div>
      <div className="color-overlay"></div>
      <div className="eventSection">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <h1 className="mb-3">Upcoming Events</h1>
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <EventCard eventName="Event-1" time={700000} />
            </div>
            {eventDetails.map((el) => (
              <div class="carousel-item">
                <EventCard eventName={el.name} time={el.time} />
              </div>
            ))}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
