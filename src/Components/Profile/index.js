import React from 'react';
import { ImHome } from "react-icons/im";

import './profile.css';

const Profile = () => {
  return (
    <div className="user-profile-page">
      <div className="user-profile-wrap">
        <aside>
          <div className="user-profile-photo-wrap">
            <img src='./rafting.jpg' alt='Profile' />
          </div>
        </aside>
        <section>
          <div>
            <h2>First name Last name</h2>
          </div>
          <div>
            <h4>About</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis odio beatae, laborum cupiditate nesciunt quo velit debitis quibusdam necessitatibus blanditiis placeat tempora libero, corrupti magni autem. Molestiae, ad optio! Commodi.</p>
            <h4>Location</h4>
            <div className="user-profile-location">
              <ImHome />
              <p>location</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Profile;
