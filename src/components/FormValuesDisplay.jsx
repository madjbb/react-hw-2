import React from 'react';
import List from './List';

function FormValuesDisplay({ formValues }) {
  return (
    <List {...formValues} />
  )
}

export default FormValuesDisplay