import React, { useState, useCallback, useEffect } from 'react';
import Clock from '../components/Clock';
import LocaleDropdown from '../components/LocaleDropdown';

function Clocks() {

  const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

  const options = {
    hour: `numeric`,
    minute: `numeric`,
    second: `numeric`,
  };

  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState(userLocale);
  console.log(`locale`, locale);
  
  const formatter = Intl.DateTimeFormat(locale, options);

  let timerId = null;

  const secondTicker = useCallback(() => {
    timerId = setInterval(() => {
      // const newSecondNumber = date.getSeconds + 1;
      // const newDate = date.setSeconds(newSecondNumber);
      setDate(new Date());
    }, 1000);
  },[date, setDate]);

  useEffect(() => {
    secondTicker();
  }, []);

  return (
    <>
      <Clock formatter={formatter} date={date} />
      <LocaleDropdown locale={locale} setLocale={setLocale} />
    </>
  );
}

export default Clocks;
