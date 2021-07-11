import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Input({ className, onFuncStrSubmit }) {
  const [functStr, setFuncStr] = useState('x, return x;');
  const idRef = useRef();

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