import { useState, useEffect, useReducer } from 'react';

const internalReducer = ({ funcMap }, { type, payload }) => {
  switch (type) {
    case "onFuncStrSubmit":
      return {
        funcMap: {...funcMap, [payload.id]: payload.str}
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

function useGraph({ initial = {} }, reducer = internalReducer) {
  const [{ funcMap }, dispatch] = useReducer(reducer, { funcMap: initial });
  const [funcArray, setFuncArray] = useState([]); 

  const onFuncStrSubmit = (str, id) => {
    dispatch({ type: 'onFuncStrSubmit', payload: { id, str }});
  };

  useEffect(() => {
    const newList = Object.entries(funcMap)
      .filter(([key, value]) => Boolean(value.trim()))
      .map(([key, value]) => ({ func: value.split(', ') }));
    setFuncArray(newList);
  }, [funcMap, setFuncArray]);

  return { funcArray, onFuncStrSubmit };
};

useGraph.reducer = internalReducer;

export default useGraph;
