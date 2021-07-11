import React from 'react';
import Graph from './Graph';
import s from './Usage.module.css';
import useGraph from './useGraph';

function Usage() {

  const { getGraphProps, getInputProps } = useGraph();

  const onSubmit = (str) => console.log(`New funct string was submitted`, str);
  
  return (
    <Graph { ...getGraphProps() } >
      <Graph.Input className={s.inputForm} { ...getInputProps({ onSubmit }) } />
      <Graph.Canvas />
    </Graph>
  )
};

export default Usage;