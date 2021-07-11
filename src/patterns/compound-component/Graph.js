import React, { useState, useEffect } from 'react';
import Canvas from './Canvas';
import Input from './Input';
import { GraphProvider } from './useGraphContext';


function Graph({ children }) {
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
    <GraphProvider value={{ funcArray, onFuncStrSubmit }}>
      {children}
    </GraphProvider>
  )
};

Graph.Canvas = Canvas;
Graph.Input = Input;

export default Graph;