import React from 'react';

import './activity.css';

const HostActivity = () => {
  return (
    <div className="host-activity">
      <div className="host-act-header">
        <h1>Host the activities you enjoy doing, and earn money along the way.</h1>
        <button type="button">Let's start</button>
      </div>
      <div className="host-act-about">
        <div>
          <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" alt="person with backpack in the mountains" />
          <section>
            <h4>Create an experience</h4>
            <p>
              Skiing lessons for beginners, group hike over the weekend or whitewater rafting.
              Create and curate an experience people want to try out.
            </p>
          </section>
        </div>
        <div>
          <section>
            <h4>Do what you enjoy</h4>
            <p>
              Turn your passion into profit.
              Do all of the activities you love, get paid, without it feeling like a job. 
            </p>
          </section>
          <img src="https://images.unsplash.com/photo-1525863267585-0fab58062fa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80" alt="person riding a bike through a forest" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1496887515187-f364d230ab6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1319&q=80" alt="two people walikng on snow with snowboards in their hands" />
          <section>
            <h4>Share your passion with the world</h4>
            <p>Take people on trips to show them stunning locations. Places and activities they will never forget.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HostActivity;