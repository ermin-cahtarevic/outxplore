import React, { useState } from 'react';
import Place from 'react-algolia-places';

import './listing-form.css';

const ListingForm = () => {
  const [locationInput, setLocationInput] = useState('');

  return (
    <div className="listing-form-page">
      <div className="listing-form-wrap">
        <h2>Let's build your new Activity Lisitng</h2>
        <form>
          <div>
            <h4>Title</h4>
            <p></p>
            <input
              type="text"
              name="title"
              value={"title"}
              placeholder="Activity title"
            />
          </div>
          <div>
            <h4>Description</h4>
            <textarea
              name="description"
              value={"description"}
              placeholder="Activity description"
            />
          </div>
          <div>
            <h4>Location</h4>
            <Place
              onChange={e => setLocationInput(e.suggestion.value)}
              value={locationInput}
              placeholder="Location of activity"
              name="location"
            />
          </div>
          <div>
            <h4>Photos</h4>
            <input
              type="file"
              multiple={true}
              name="photos"
            />
          </div>
          <div>
            <h4>Activity title</h4>
            <input
              type="number"
              name="price"
              value={"price"}
              placeholder="Activity price"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;
