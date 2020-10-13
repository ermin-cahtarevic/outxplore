import React from 'react';
import { ImUserCheck, ImMap, ImAccessibility } from 'react-icons/im';

import './activity.css';

const HostActivity = () => {
  return (
    <div className="host-activity">
      <div className="host-act-header">
        <h1>Host the activities you enjoy doing, and earn money along the way.</h1>
        <button type="button" className="host-act-start-btn">Let's start</button>
      </div>
      <div className="host-act-video-wrap">
        <video autoPlay="autoplay" loop="loop" muted className="host-act-video">
          <source src="https://res.cloudinary.com/ermin/video/upload/v1602621429/untitled_bzd6cu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="host-act-gradient" />
      </div>
      <div className="host-act-about">
        <div>
          <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" alt="person with backpack in the mountains" />
          <section className="host-act-about-text">
            <h4>Create an experience</h4>
            <p>
              Skiing lessons for beginners, group hike over the weekend or whitewater rafting.
              Create and curate an experience people want to try out.
            </p>
          </section>
        </div>
        <div>
          <section className="host-act-about-text">
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
          <section className="host-act-about-text">
            <h4>Share your passion with the world</h4>
            <p>Take people on trips to show them stunning locations. Places and activities they will never forget.</p>
          </section>
        </div>
      </div>
      <div className="host-act-section-1">
        <h2>What we look for in hosts</h2>
        <div className="host-act-icon-box">
          <div>
            <div className="host-act-icon-wrap">
              <ImUserCheck className="host-act-icon" />
            </div>
            <div>
              <h4>Professionals</h4>
              <p>Hikers, surfers, avid snowboarders - among others. To guide the guests on a unique experience.</p>
            </div>
          </div>
          <div>
            <div className="host-act-icon-wrap">
              <ImMap className="host-act-icon" />
            </div>
            <div>
              <h4>Have access to unique places and activities</h4>
              <p>They unviel all the natural wonders that couldn't be found without the help of locals.</p>
            </div>
          </div>
          <div>
            <div className="host-act-icon-wrap">
              <ImAccessibility className="host-act-icon" />
            </div>
            <div>
              <h4>Provide a great experience for the guests</h4>
              <p>The guests get to experience an acitivity as the locals do.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="host-act-getting-started">
        <h2>Getting started</h2>
        <h3>Here is a quick overview of the process</h3>
        <div className="host-act-getting-started-list">
          <div>
            <div className="host-act-num-wrap"><div>1</div></div>
            <h4>Apply to become a host and get approved</h4>
            <p>Make sure your experience meets the needs. Extensive experience, access to places and professionalism.</p>
          </div>
          <div>
            <div className="host-act-num-wrap"><div>2</div></div>
            <h4>Create an activity listing</h4>
            <p>People will find you through the listing. Be sure to highlight your expertise and add high quality photos to leave a great first impression.</p>
          </div>
          <div>
            <div className="host-act-num-wrap"><div>3</div></div>
            <h4>Start hosting</h4>
            <p>It's time to do what you love!</p>
          </div>
        </div>
        <button type="button" className="host-act-start-btn-bottom">Let's start</button>
      </div>
    </div>
  );
};

export default HostActivity;