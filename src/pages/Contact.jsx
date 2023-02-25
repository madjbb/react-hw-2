import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Form from '../components/Form';
import FormInput from '../components/formInput';
import FormButton from '../components/formButton';
import FormValuesDisplay from '../components/formValuesDisplay';

const schema = yup.object({
  username: yup.string().required('required field').min(2, 'must be between 2-20 characters long').max(20, 'must be between 2-20 characters long'),
  email: yup.string().required('required field').email('must be an email'),
  age: yup.number().required('required field').positive('must be a positive number').integer('must be a whole number'),
})

function Contact() {
  const { register, reset, handleSubmit, getValues, formState: { errors, isDirty, isValid, isSubmitting }, formState } = useForm({
    resolver: yupResolver(schema),
    mode: `onChange`,
  });

  const submitHandler = (values) => {
    console.log(values);
    reset();
  };

  const { formValues, updateFormValues } = useState({});

  return (
    <>
      <Form handleSubsmit={handleSubmit} submitHandler={submitHandler}>
        <FormInput type={"text"} register={register} name={"username"} errors={errors} />
        {/* <FormInput type={"text"} register={register} name={"email"} errors={errors.email} />
        <FormInput type={"text"} register={register} name={"age"} errors={errors.age} errorMessage={"must be a number"} /> */}
        {/* <FormButton type={"reset"} reset={reset} text={"Reset"} />
        <FormButton type={"submit"} updateFormValues={updateFormValues} getValues={getValues} text={"Submit"} isSubmitting={isSubmitting} isValid={isValid} isDirty={isDirty} /> */}
      </Form>
      {/* <FormValuesDisplay formValues={formValues}/> */}
    </>
  );
}

export default Contact;
