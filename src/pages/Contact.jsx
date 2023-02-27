import React, { useState } from 'react';
import Form from '../components/Form';
import FormValuesDisplay from '../components/FormValuesDisplay';

function Contact() {
  const [ formValues, updateFormValues ] = useState(-1);
  // console.log(`formValues`, formValues);

  return (
    <>
      <Form updateFormValues={updateFormValues} />
      <FormValuesDisplay formValues={formValues} />
    </>
  );
}

export default Contact;
