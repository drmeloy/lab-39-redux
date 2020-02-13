import React, { useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(5);

  const countdown = setInterval(() => {
    setTime(time => time - 1);
  }, 1000)

  return (
    <>
      {time > 0 && <h1>{time}</h1>}
      {time < 0 && }
    </>
  );
}