import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hostApplication } from '../../../Redux/Actions/host';
import { activities, previousExperience } from '../../helper';

import './hostForm.css';

const options = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
]

const HostForm = () => {
  const initialState = {
    activityType: '',
    previousHostingExperience: '',
    guestMaxNum: 1,
    additionalExperienceInfo: '',
    location: '',
    locationType: '',
    detailedDescription: '',
    links: '',
  };

  const [formInput, setFormInput] = useState(initialState);
  const {
    activityType, previousHostingExperience, guestMaxNum, additionalExperienceInfo, location, locationType,
    detailedDescription, links
  } = formInput;

  const dispatch = useDispatch();

  const handleChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      host_application: {
        activity_type: activityType,
        previous_hosting_experience: previousHostingExperience,
        guest_max_num: guestMaxNum,
        additional_experience_info: additionalExperienceInfo,
        location,
        location_type: locationType,
        detailed_description: detailedDescription,
        links,
      },
    };

    console.log(data)
    hostApplication(data)(dispatch);
    setFormInput(initialState);
  }

  return (
    <div className="host-form-page">
      <div className="host-form-wrap">
        <h2>Let's start the process!</h2>
        <p>Using the bellow form add all of the information that we will need in order to decide if you are a good candidate.</p>
        <div className="host-form">
          <form onSubmit={handleSubmit}>
            <div className="activity-type">
              <h4>Activity type</h4>
              <p>Choose an activity you would be hosting. <span className="red-star">*</span></p>
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
              <h4>Previous experience</h4>
              <p>Do you have any previous hosting experience? <span className="red-star">*</span></p>
              <select
                className="host-form-select"
                onChange={handleChange}
                placeholder="Select your level of experiences"
                required
                name="previousHostingExperience"
                value={previousHostingExperience}
              >
                {
                  previousExperience.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))
                }
              </select>
              <p>What is the maximum number of guests you would take on? <span className="red-star">*</span></p>
              <input
                type="number"
                onChange={handleChange}
                min={1}
                max={25}
                required
                name="guestMaxNum"
                value={guestMaxNum}
              />
              <p>Provide any additional information that you believe is relevant (ex. previous experience, target audience). <span className="optional">(optional)</span></p>
              <textarea
                placeholder="ex. 'My target audience is...', 'I have worked as a tour guide...'"
                value={formInput.additionalExperienceInfo}
                name="additionalExperienceInfo"
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Location</h4>
              <p>Where would the activity take place? <span className="red-star">*</span></p>
              <select
                className="host-form-select"
                onChange={handleChange}
                placeholder="Location of activity"
                required
                name="location"
                value={location}
              >
                {
                  options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))
                }
              </select>
              <p>What best describes the location and activity? <span className="red-star">*</span></p>
              <select
                className="host-form-select"
                onChange={handleChange}
                placeholder="Location and activity description"
                required
                name="locationType"
                value={locationType}
              >
                {
                  options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))
                }
              </select>
            </div>
            <div>
              <h4>Detailed description</h4>
              <p>Tell us about the experience you want to provide to your guests. Explain the whole process - from guests arriving to the end of the trip - in detail. <span className="red-star">*</span></p>
              <textarea
                placeholder="ex. 'The guests would arrive to the determined location, I would introduce myself and explain how the trip will go down...'"
                value={formInput.detailedDescription}
                name="detailedDescription"
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Additional info</h4>
              <p>Please attach links where we can find photos of you performing the selected activities. <span className="optional">(optional, but will improve the chances of getting approved)</span></p>
              <textarea
                placeholder="ex. social media accounts, link to an online photo folder..."
                value={formInput.links}
                name="links"
                onChange={handleChange}
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
