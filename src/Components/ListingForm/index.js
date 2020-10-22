import React, { useState } from 'react';
import Place from 'react-algolia-places';
import { activities } from '../helper';

import './listing-form.css';
import { createLisitng } from '../../Redux/Actions/listings';
import { useDispatch } from 'react-redux';

const ListingForm = () => {
  const initialState = {
    title: '',
    description: '',
    activityType: '',
    guestMaxNum: 1,
    photos: [],
    price: 0,
  };

  const [formInput, setFormInput] = useState(initialState);
  const [locationInput, setLocationInput] = useState('');

  const dispatch = useDispatch();

  const { title, description, activityType, guestMaxNum, photos, price } = formInput;

  const handleChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = e => {
    e.persist();
    
    setFormInput({
      ...formInput,
      photos: e.target.files,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    for (let i = 0; i < photos.length; i++) {
      data.append(`photos[${i}]`, photos[i]);
    };

    data.append('title', title);
    data.append('description', description);
    data.append('activity_type', activityType);
    data.append('guest_max_num', guestMaxNum);
    data.append('price', price);
    data.append('location', locationInput);

    createLisitng(data)(dispatch);

    setFormInput(initialState);
    setLocationInput('');
    document.querySelector('.activity-listing-photo-input').value = '';
  }

  return (
    <div className="listing-form-page">
      <div className="listing-form-wrap">
        <h2>Let's build your new Activity Lisitng</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <h4>Title</h4>
            <p>Add in a title for your activity lisitng. <span className="red-star">*</span></p>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Activity title"
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Description</h4>
            <p>Describe the activity in as much detail as you can. <span className="red-star">*</span></p>
            <textarea
              name="description"
              value={description}
              placeholder="Activity description"
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Activity type</h4>
            <p>Choose the type of activity you will be hosting. <span className="red-star">*</span></p>
            <select
              className="host-form-select"
              onChange={handleChange}
              placeholder="Select the activities"
              required
              name="activityType"
              value={activityType}
            >
              {
                activities.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))
              }
            </select>
          </div>
          <div>
            <h4>Maximum number of guests</h4>
            <p>What is the maximum number of guests you would take on? <span className="red-star">*</span></p>
            <input
              className="host-form-number-input"
              type="number"
              onChange={handleChange}
              min={1}
              max={25}
              required
              name="guestMaxNum"
              value={guestMaxNum}
            />
          </div>
          <div>
            <h4>Location</h4>
            <p>Where will the activity be held? <span className="red-star">*</span></p>
            <Place
              onChange={e => setLocationInput(e.suggestion.value)}
              value={locationInput}
              placeholder="Location of activity"
            />
          </div>
          <div>
            <h4>Photos</h4>
            <p>Add at least two photos of the activity and the location. <span>(min 2 - max 5)</span> <span className="red-star">*</span></p>
            <input
              type="file"
              multiple={true}
              name="photos"
              onChange={handlePhotoChange}
              className="activity-listing-photo-input"
            />
          </div>
          <div>
            <h4>Price</h4>
            <p>How much will the activity cost per person? <span className="red-star">*</span></p>
            <div className="activity-listing-price-input">
              $
              <input
                type="number"
                name="price"
                value={price}
                placeholder="Activity price"
                onChange={handleChange}
                className="activity-listing-price-field"
              />
            </div>
          </div>
          <span><span className="red-star">*</span> - Required fields</span>

          <button type="submit" className="activity-listing-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;
