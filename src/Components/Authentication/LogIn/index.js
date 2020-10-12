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
  const { email, password } = eachEntry;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    setEachEntry({
      ...eachEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      user: {
        email,
        password,
      },
    };

    LogInUser(data)(dispatch);
    history.push('/');
    setEachEntry(initialInputState);
  }

  return (
    <div>
      <AuthForm type="login" handleChange={handleChange} handleSubmit={handleSubmit} state={eachEntry} />
    </div>
  );
};

export default LogIn;
