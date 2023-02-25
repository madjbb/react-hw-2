import React from 'react'

function FormInput({type, register, name, errors, errorMessage}) {
  console.log({type, register, name, errors, errorMessage})
  
  // let errorMsg = null;

  // if (errorMessage) {
  //   errorMsg = errorMessage
  // } else {
  //   errorMsg = errors.message
  // }
  
  return (
    <div>
      <label>
          Username: <input type={type} {...register({name}, {required: true})} />
      </label>
      {/* {errors && <span>{errorMsg}</span>} */}
    </div>
  )
}

export default FormInput