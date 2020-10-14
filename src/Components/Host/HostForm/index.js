import React, { useState } from 'react';
import Select from 'react-select';

import './hostForm.css';

const options = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
]

const HostForm = () => {
  const [optionsSelected, setOptionsSelected] = useState([]);

  const handleChange = value => {
    setOptionsSelected(value);
  };

  return (
    <div className="host-form-page">
      <div className="host-form-wrap">
        <h2>Let's start the process!</h2>
        <p>Using the bellow form add all of the information that we will need in order to decide if you are a good candidate.</p>
        <div className="host-form">
          <form>
            <div className="activity-type">
              <h4>Activity type</h4>
              <p>Choose up to 2 activites you would be hosting. <span className="red-star">*</span></p>
              <Select
                isMulti
                onChange={handleChange}
                options={ optionsSelected.length >= 2 ? [] : options }
                placeholder="Select the activities"
                isClearable
              />
            </div>
            <div>
              <h4>Previous experience</h4>
              <p>Do you have any previous hosting experience? <span className="red-star">*</span></p>
              <Select
                onChange={handleChange}
                options={options}
                placeholder="Select your level of experience"
                isClearable
              />
              <p>What is the maximum number of guests you would take on? <span className="red-star">*</span></p>
              <Select
                onChange={handleChange}
                options={options}
                placeholder="Maximum number of guests"
              />
              <p>Provide any additional information that you believe is relevant (ex. previous experience, target audience). <span className="optional">(optional)</span></p>
              <textarea
                placeholder="ex. 'My target audience is...', 'I have worked as a tour guide...'"
              />
            </div>
            <div>
              <h4>Location</h4>
              <p>Where would the activity take place? <span className="red-star">*</span></p>
              <Select
                onChange={handleChange}
                options={options}
                placeholder="Location of activity"
              />
              <p>What best describes the location and activity? <span className="red-star">*</span></p>
              <Select
                onChange={handleChange}
                options={options}
                placeholder="Maximum number of guests"
              />
            </div>
            <div>
              <h4>Detailed description</h4>
              <p>Tell us about the experience you want to provide to your guests. Explain the whole process - from guests arriving to the end of the trip - in detail. <span className="red-star">*</span></p>
              <textarea
                placeholder="ex. 'The guests would arrive to the determined location, I would introduce myself and explain how the trip will go down...'"
              />
            </div>
            <div>
              <h4>Additional info</h4>
              <p>Please attach links where we can find photos of you performing the selected activities. <span className="optional">(optional, but will improve the chances of getting approved)</span></p>
              <textarea
                placeholder="ex. social media accounts, link to an online photo folder..."
              />
            </div>
            <span><span className="red-star">*</span> - Recuired fields</span>

            <button type="submit" className="host-form-apply-btn">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostForm;
