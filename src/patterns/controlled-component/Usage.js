import React, { useEffect, useState } from 'react';
import Graph from './Graph';
import s from './Usage.module.css';

function Usage() {

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

  return (
    <Graph funcArray={funcArray} onFuncStrSubmit={onFuncStrSubmit}>
      <Graph.Input className={s.inputForm} />
      <Graph.Canvas />
    </Graph>
  )
};

export default Usage;