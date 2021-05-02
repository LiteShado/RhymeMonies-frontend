import { useState, useEffect } from 'react';

export const useLocalStorage = (userId, defaultValue) => {
  const stored = localStorage.getItem(userId);
  const initial = stored ? JSON.parse(stored) : defaultValue;

  const [value, setValue] = useState(initial);


  useEffect(() => {
    localStorage.setItem(userId, JSON.stringify(userId));
  }, [userId, value]);



  return [value, setValue];
};
