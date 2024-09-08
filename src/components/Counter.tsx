import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';
import { RootState } from '../store/store';

//Establecemos counter como un Functional Component:
const Counter: React.FC = () => {

    //Traemos el valor del contador desde el estado.
  const count = useSelector((state: RootState) => state.counter.value);
    //Ejecutamos las acciones del reduce a través del useDispatch:
  const dispatch = useDispatch();

  //Renderizamos.
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;