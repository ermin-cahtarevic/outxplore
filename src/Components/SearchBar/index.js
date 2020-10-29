import React, { useState } from 'react';
import Place from 'react-algolia-places';
import { activities } from '../helper';

import './search-bar.css';

const SearchBar = () => {
  const [activityInput, setActivityInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

  const handleChange = e => {
    setActivityInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="search-bar-wrap">
      <form onSubmit={handleSubmit}>
        <div>
          <Place
            onChange={e => setLocationInput(e.suggestion.value)}
            value={locationInput}
          />
        </div>
        <select
          className="search-bar-select"
          onChange={handleChange}
          placeholder="Select the activity"
          required
          value={activityInput}
        >
          <option value="" disabled>Select an activity</option>
          {
            activities.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
        <button className="search-bar-btn" type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
