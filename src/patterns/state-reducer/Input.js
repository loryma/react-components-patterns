import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useGraphContext } from './useGraphContext';

function Input({ className, onFuncStrSubmit }) {
  const { funcArray } = useGraphContext();
  const [functStr, setFuncStr] = useState();
  const idRef = useRef();
  const initialValueRef = useRef();

  useEffect(() => {
    if (!initialValueRef.current && Boolean(funcArray?.length)) {
      setFuncStr(funcArray?.[0]?.func?.join(', ') || '');
      initialValueRef.current = true;
    }
  }, [funcArray]);

  const handleChange = ({ target: { value }}) => setFuncStr(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFuncStrSubmit(functStr, idRef.current);
  };

  useEffect(() => {
    if (!idRef.current) {
      idRef.current = uuidv4();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input 
        value={functStr}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;