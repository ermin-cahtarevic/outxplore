import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthForm from '../AuthForm';
import { signUpUser } from '../../../Redux/Actions/auth';
import { useHistory } from 'react-router';

const SignUp = () => {
  const initialInputState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const [error, setError] = useState(null);

  const {
    firstName, lastName, email, password, passwordConfirmation
  } = eachEntry;

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
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    };

    signUpUser(data)(dispatch);
    history.push('/');
    setEachEntry(initialInputState);
  }

  return (
      <AuthForm type="signup" handleChange={handleChange} handleSubmit={handleSubmit} state={eachEntry} error={error} />
  );
};

export default SignUp;
