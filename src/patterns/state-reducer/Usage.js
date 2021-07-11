import React from 'react';
import Graph from './Graph';
import s from './Usage.module.css';
import useGraph from './useGraph';

function Usage() {

  const reducer = (state, action) => {
    switch (action.type) {
      case "onFuncStrSubmit":
        return {
          funcMap: {...state.funcMap, [action.payload.id]: action.payload.str}
        };
      default:
        useGraph.reducer(state, action);
    }
  };

  const { funcArray, onFuncStrSubmit } = useGraph({ initial: {initial: 'x, return Math.cos(x);'}}, reducer);
  
  return (
    <Graph funcArray={funcArray} >
      <Graph.Input className={s.inputForm} onFuncStrSubmit={onFuncStrSubmit} />
      <Graph.Canvas />
    </Graph>
  )
};

export default Usage;