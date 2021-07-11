import React from 'react';

const GraphContext = React.createContext([]);

function GraphProvider({ value, children }) {
  return (
    <GraphContext.Provider value={value}>
      { children }
    </GraphContext.Provider>
  )
};

function useGraphContext() {
  const context = React.useContext(GraphContext);
  if (context === undefined) {
    throw new Error('useGraphContext should be used inside GraphProvider');
  }
  return context;
};

export { GraphProvider, useGraphContext };