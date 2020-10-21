import React, { useState } from 'react';
import Place from 'react-algolia-places';

import './listing-form.css';

const ListingForm = () => {
  const initialState = {
    title: '',
    description: '',
    photos: [],
    price: 0,
  };

  const [formInput, setFormInput] = useState(initialState);
  const [locationInput, setLocationInput] = useState('');

  const { title, description, photos, price } = formInput;

  const handleChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = e => {
    e.persist();

    const temp = photos;
    temp.push(e.target.files);

    setFormInput({
      ...formInput,
      photos: temp,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    const photoData = new FormData();
    photoData.append('photos', photos);

    const data = {
      lisitng: {
        ...formInput,
        photos: photoData,
        location: locationInput,
      },
    };

    console.log(data);
    setFormInput(initialState);
  }

  return (
    <div className="listing-form-page">
      <div className="listing-form-wrap">
        <h2>Let's build your new Activity Lisitng</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <h4>Title</h4>
            <p>Add in a title for your activity lisitng.</p>
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
            <p>Describe the activity in as much detail as you can.</p>
            <textarea
              name="description"
              value={description}
              placeholder="Activity description"
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Location</h4>
            <p>Where will the activity be held?</p>
            <Place
              onChange={e => setLocationInput(e.suggestion.value)}
              value={locationInput}
              placeholder="Location of activity"
            />
          </div>
          <div>
            <h4>Photos</h4>
            <p>Add at least two photos of the activity and the location. <span>(min 2 - max 5)</span></p>
            <input
              type="file"
              multiple={true}
              name="photos"
              onChange={handlePhotoChange}
            />
          </div>
          <div>
            <h4>Price</h4>
            <p>How much will the activity cost per person?</p>
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
          <button type="submit" className="activity-listing-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;
