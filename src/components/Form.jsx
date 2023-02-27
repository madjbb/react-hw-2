import React, { Children, useEffect } from 'react';
import { get, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  username: yup
    .string()
    .required('required field')
    .min(2, 'must be between 2-20 characters')
    .max(20, 'must be between 2-20 characters'),
  email: yup
    .string()
    .required('required field')
    .email('must be an email')
    .max(20, 'must be less than 50 characters'),
  age: yup
    .number()
    .required('required field')
    .positive('must be a positive number')
    .integer('must be a whole number'),
});

function Form({ updateFormValues }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onChange`,
  });
  // console.log(formState);
  // console.log(errors);

  const submitHandler = (values) => {
    console.log(values);
    updateFormValues(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <label>
        Username:{' '}
        <input type="text" {...register(`username`, { required: true })} />
      </label>
      {errors.username && <span>{errors.username.message}</span>}
      <label>
        Email: <input type="text" {...register(`email`, { required: true })} />
      </label>
      {errors.email && <span>{errors.email.message}</span>}
      <label>
        Age: <input type="text" {...register(`age`, { required: true })} />
      </label>
      {errors.age && <span>must be a number</span>}
      <button type="reset" onClick={reset}>
        Reset
      </button>
      <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
        Submit
      </button>
    </form>
  );
}

export default Form;
