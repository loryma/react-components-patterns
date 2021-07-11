import React from 'react';
import Canvas from './Canvas';
import Input from './Input';
import { GraphProvider } from './useGraphContext';


function Graph({ children, funcArray }) {
  
  return (
    <GraphProvider value={{ funcArray }}>
      {children}
    </GraphProvider>
  )
};

Graph.Canvas = Canvas;
Graph.Input = Input;

export default Graph;