import { useState, useEffect } from 'react';

const callFnsInSeq = (...fns) => (...arg) => {
  fns.forEach(fn => fn && fn(...arg));
}

function useGraph() {
  const [funcMap, setFuncMap] = useState({});
  const [funcArray, setFuncArray] = useState([]); 

  const onFuncStrSubmit = (str, id) => {
    setFuncMap( value => ({...value, [id]: str}));
  };

  const getGraphProps = () => ({
    funcArray,
  });

  const getInputProps = ({ onSubmit, ...props }) => ({
    onFuncStrSubmit: callFnsInSeq(onFuncStrSubmit, onSubmit),
    ...props,
  })

  useEffect(() => {
    const newList = Object.entries(funcMap)
      .filter(([key, value]) => Boolean(value.trim()))
      .map(([key, value]) => ({ func: value.split(', ') }));
    setFuncArray(newList);
  }, [funcMap, setFuncArray]);

  return { funcArray, onFuncStrSubmit, getGraphProps, getInputProps };
};

export default useGraph;
