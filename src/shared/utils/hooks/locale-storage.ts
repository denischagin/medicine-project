import { useState } from "react";

interface useLocalStorageReturn {
  setItem: (value: string) => void;
  removeItem: () => void;
  value: string | null;
}

export const useLocalStorage = (key: string): useLocalStorageReturn => {
  const [value, setValue] = useState<string | null>(() => {
    const item = localStorage.getItem(key)

    if (item) return item;
    else return null;
  });

  const setItem = (value: string) => {
    setValue(value);
    localStorage.setItem(key, value);
  };

  const removeItem = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return { removeItem, setItem, value };
};
