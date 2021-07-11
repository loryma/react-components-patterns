import React from 'react';
import Graph from './Graph';
import s from './Usage.module.css';
import useGraph from './useGraph';

function Usage() {

  const { funcArray, onFuncStrSubmit } = useGraph();
  
  return (
    <Graph funcArray={funcArray} >
      <Graph.Input className={s.inputForm} onFuncStrSubmit={onFuncStrSubmit} />
      <Graph.Canvas />
    </Graph>
  )
};

export default Usage;