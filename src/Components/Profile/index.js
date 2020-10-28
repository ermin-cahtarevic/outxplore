import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImHome } from "react-icons/im";
import { updatePhoto } from '../../Redux/Actions/auth';

import './profile.css';
import Modal from './Modal/Modal';

const Profile = () => {
  const [photo, setPhoto] = useState({});
  const user = useSelector(store => store.auth.user);
  const dispatch = useDispatch();

  const onChange = e => {
    e.persist();
    setPhoto(e.target.files[0]);
  }

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('photo', photo);

    updatePhoto(data)(dispatch);

    setPhoto({});
  }

  const openModal = () => {
    document.querySelector('.modal-wrap').classList.add('modal-show');
  }

  return (
    <div className="user-profile-page">
      <Modal onChange={onChange} onSubmit={onSubmit} />
      <div className="user-profile-wrap">
        <aside>
          <div className="user-profile-photo-wrap">
            <img src={user.photo ? user.photo : '/download.png'} alt={`${user.first_name} ${user.last_name}`} />
          </div>
          <button onClick={openModal}>Update profile photo</button>
        </aside>
        <section>
          <div>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
          </div>
          <div>
            <h4>About</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis odio beatae, laborum cupiditate nesciunt quo velit debitis quibusdam necessitatibus blanditiis placeat tempora libero, corrupti magni autem. Molestiae, ad optio! Commodi.</p>
            <h4>Location</h4>
            <div className="user-profile-location">
              <ImHome className="home-icon" />
              <p>location</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
