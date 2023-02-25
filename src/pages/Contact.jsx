import React, { useState } from 'react';
import Form from '../components/Form';
import FormValuesDisplay from '../components/formValuesDisplay';

function Contact() {
  const { formValues, updateFormValues } = useState({});
  console.log(`formValues`, formValues);

  return (
    <>
      <Form updateFormValues={updateFormValues} />
      <FormValuesDisplay formValues={formValues}/>
    </>
  );
}

export default Contact;
