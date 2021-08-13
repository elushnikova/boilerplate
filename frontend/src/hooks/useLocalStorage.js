import { useEffect, useState } from 'react';

function getSavedValue(key, initalValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) {
    return savedValue;
  }

  return initalValue;
}

function useLocalStorage(key, initalValue) {
  const [value, setValue] = useState(() => getSavedValue(key, initalValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
