import React from 'react';
import { nanoid } from 'nanoid';

function FormValuesDisplay({ formValues }) {
  // console.log(`formValues`, formValues);

  if (formValues === -1) {
    return null;
  }

  return (
    <div>
      {/* {Object.entries(formValues).map((value) => (<p key={nanoid()}>{value[0]}: {value[1]}</p>))} */}
      {Object.entries(formValues).map(([key, value]) => (<p key={nanoid()}>{key}: {value}</p>))}
    </div>
  )
}

export default FormValuesDisplay