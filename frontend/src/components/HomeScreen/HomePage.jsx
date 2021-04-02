import React from 'react';
import Navbar from '../Navbar';
import ReactFullpage from '@fullpage/react-fullpage';
import MainScreen from './MainScreen';

import Section2 from '../Section-2/Section2';
import Reservation from '../Reservation/Reservation';
import CustomerReview from '../ReviewPage/CustomerReview';
import Event from '../Events/Event';

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ReactFullpage
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition="right"
        navigationTooltips={[
          'You are on main page',
          'You are on timeline page',
          'You are no where',
        ]}
        showActiveTooltip={false}
        loopBottom={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <MainScreen fullpageApi={fullpageApi} />
              </div>

              <div className="section">
                <Section2 />
              </div>
              {/*section 2 ends*/}
              <div className="section">
                <Reservation />
              </div>
              <div className="section">
                <CustomerReview />
              </div>
              <div className="section">
                <Event />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default HomePage;
