import React from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

function LocaleDropdown({ locale, setLocale }) {
  const { register, handleSubmit, setValue, formState: {errors} } = useForm({ mode: `onChange` });
  // const submitHandler = (locale) => {
  //   console.log(locale.localeDropdown);
  //   setLocale(locale);
  // };
  const handleInputChanges = (event) => {
    const value = event.target.value;
    console.log(value);
    setLocale(value);
    setValue("locale", value);
  };
  return (
  //  <form onChange={handleSubmit(submitHandler)}>
  <form>
    <label>
      Locale:{` `}
      <select defaultValue="hello" {...register(`localeDropdown`, {onChange: handleInputChanges})}>
        <option selected value="en-GB">en-GB</option>
        <option value="en-US">en-US</option>
        <option value="ko-KR">ko-KR</option>
        <option value="ar-EG">ar-EG</option>
      </select>
    </label>
   </form>
  )
}

export default LocaleDropdown