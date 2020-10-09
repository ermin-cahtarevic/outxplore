import React, { useState } from 'react';
import AuthForm from '../AuthForm';
import { signUpUser } from '../../../Redux/Actions/auth';

const SignUp = () => {
  const initialInputState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const {
    firstName, lastName, email, password, passwordConfirmation
  } = eachEntry;

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
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    };

    signUpUser(data);
    setEachEntry(initialInputState);
  }

  return (
      <AuthForm type="signup" handleChange={handleChange} handleSubmit={handleSubmit} state={eachEntry} />
  );
};

export default SignUp;
