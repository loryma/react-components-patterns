import React, { useState, useEffect } from 'react';
import Canvas from './Canvas';
import Input from './Input';
import { GraphProvider } from './useGraphContext';


function Graph({ children, funcArray, onFuncStrSubmit }) {
  

  return (
    <GraphProvider value={{ funcArray, onFuncStrSubmit }}>
      {children}
    </GraphProvider>
  )
};

Graph.Canvas = Canvas;
Graph.Input = Input;

export default Graph;