import { useState, useEffect } from 'react';

function useGraph() {
  const [funcMap, setFuncMap] = useState({});
  const [funcArray, setFuncArray] = useState([]); 

  const onFuncStrSubmit = (str, id) => {
    setFuncMap( value => ({...value, [id]: str}));
  };

  useEffect(() => {
    const newList = Object.entries(funcMap)
      .filter(([key, value]) => Boolean(value.trim()))
      .map(([key, value]) => ({ func: value.split(', ') }));
    setFuncArray(newList);
  }, [funcMap, setFuncArray]);

  return { funcArray, onFuncStrSubmit };
};

export default useGraph;
