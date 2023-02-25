import React from 'react'

function FormButton({ type, reset, updateFormValues, text, getValues, isSubmitting, isValid, isDirty }) {
  if (type ===  "submit") {
    return (
      <button type={type} onClick={() => updateFormValues(() => getValues())} disabled={isSubmitting || (!isValid || !isDirty)}>{text}</button>
    )
  };
  return (
    <button type={type} onClick={reset}>{text}</button>
  )
}

export default FormButton