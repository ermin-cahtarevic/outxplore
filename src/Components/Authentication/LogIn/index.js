import React, { useState } from 'react';
import AuthForm from '../AuthForm';
import { LogInUser } from '../../../Redux/Actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const LogIn = () => {
  const initialInputState = {
    email: '',
    password: '',
  };

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const [error, setError] = useState(null);
  const { email, password } = eachEntry;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    setEachEntry({
      ...eachEntry,
      [e.target.name]: e.target.value,
    });

    if (!!error) setError(null);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(eachEntry).some(input => input.trim().length < 1 )) {
      setError('Please fill out all of the fields!');
      return;
    }

    const data = {
      user: {
        email,
        password,
      },
    };

    LogInUser(data)(dispatch, history);
    setEachEntry(initialInputState);
  }

  return (
    <div>
      <AuthForm type="login" handleChange={handleChange} handleSubmit={handleSubmit} state={eachEntry} error={error} />
    </div>
  );
};

export default LogIn;
