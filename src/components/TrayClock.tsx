import React, { useState, useEffect } from 'react';
import { format, formatISO } from 'date-fns';
import useWindowFocus from 'use-window-focus';

const TrayClock = () => {
  const windowFocused = useWindowFocus();

  const getDate = () => {
    const now = new Date();
    return { time: format(now, 'p'), date: format(now, 'P'), iso: formatISO(now) };
  };

  const [{ time, date, iso }, setClock] = useState(getDate);

  useEffect(() => {
    if (windowFocused) {
      setClock(getDate);
      const interval = setInterval(() => {
        setClock(getDate);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [windowFocused]);

  return (
    <time dateTime={iso}>
      <span>{time}</span>
      <span>{date}</span>
    </time>
  );
};

export default TrayClock;
