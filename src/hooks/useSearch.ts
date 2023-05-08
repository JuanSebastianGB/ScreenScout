import { useEffect, useRef, useState } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
    if (search === '') return setError('you can not search for nothing');
    if (search.match(/^d+$/)) return setError('you can not search for numbers');
    if (search.length < 3)
      return setError('you can not search for less than 3 characters');
    setError('');
  }, [search]);
  return { search, setSearch, error };
};
