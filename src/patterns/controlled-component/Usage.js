import React from 'react';
import Graph from './Graph';
import s from './Usage.module.css';

function Usage() {
  return (
    <Graph>
      <Graph.Input className={s.inputForm} />
      <Graph.Canvas />
    </Graph>
  )
};

export default Usage;