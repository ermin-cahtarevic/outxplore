import React, { useState } from 'react';
import Place from 'react-algolia-places';
import { useDispatch } from 'react-redux';
import { activities } from '../helper';
import { createLisitng } from '../../Redux/Actions/listings';

import './listing-form.css';

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
  const [error, setError] = useState(null);
  const [photosError, setPhotosError] = useState(null);

  const dispatch = useDispatch();

  const {
    title, description, activityType, guestMaxNum, photos, price,
  } = formInput;

  const handleChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = e => {
    e.persist();

    if (e.target.files.length < 2) {
      setPhotosError('You need to add at east two photos!');
      document.querySelector('.activity-listing-photo-input').value = '';
      return;
    } if (e.target.files.length > 5) {
      setPhotosError('You need to add a maximum of five photos!');
      document.querySelector('.activity-listing-photo-input').value = '';
      return;
    }

    setFormInput({
      ...formInput,
      photos: e.target.files,
    });

    if (photosError) setPhotosError(null);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(formInput).some(input => {
      if (typeof input !== 'string') return false;
      return input.trim().length < 1;
    })) {
      setError('Please fill out all of the fields!');
      return;
    }

    const data = new FormData();
    for (let i = 0; i < photos.length; i += 1) {
      data.append(`photos[${i}]`, photos[i]);
    }

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
  };

  return (
    <div className="listing-form-page">
      <div className="listing-form-wrap">
        <h2>Let&apos;s build your new Activity Lisitng</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <h4>Title</h4>
            <p>
              Add in a title for your activity lisitng.
              <span className="red-star">*</span>
            </p>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Activity title"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <h4>Description</h4>
            <p>
              Describe the activity in as much detail as you can.
              <span className="red-star">*</span>
            </p>
            <textarea
              name="description"
              value={description}
              placeholder="Activity description"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <h4>Activity type</h4>
            <p>
              Choose the type of activity you will be hosting.
              <span className="red-star">*</span>
            </p>
            <select
              className="host-form-select"
              onChange={handleChange}
              placeholder="Select the activity"
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
            <p>
              What is the maximum number of guests you would take on?
              <span className="red-star">*</span>
            </p>
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
            <p>
              Where will the activity be held?
              <span className="red-star">*</span>
            </p>
            <Place
              onChange={e => setLocationInput(e.suggestion.value)}
              value={locationInput}
              placeholder="Location of activity"
            />
          </div>
          <div>
            <h4>Photos</h4>
            <p>
              Add at least two photos of the activity and the location.
              <span>(min 2 - max 5)</span>
              {' '}
              <span className="red-star">*</span>
            </p>
            { photosError && <p className="form-error">{photosError}</p> }
            <input
              type="file"
              multiple
              name="photos"
              onChange={handlePhotoChange}
              className="activity-listing-photo-input"
              required
            />
          </div>
          <div>
            <h4>Price</h4>
            <p>
              How much will the activity cost per person?
              <span className="red-star">*</span>
            </p>
            <div className="activity-listing-price-input">
              $
              <input
                type="number"
                name="price"
                value={price}
                placeholder="Activity price"
                onChange={handleChange}
                className="activity-listing-price-field"
                required
              />
            </div>
          </div>
          <span>
            <span className="red-star">*</span>
            {' '}
            - Required fields
          </span>

          { error && <p className="form-error">{error}</p> }
          <button type="submit" className="activity-listing-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;
