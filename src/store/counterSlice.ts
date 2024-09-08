//Importamos createSlice:
import { createSlice } from '@reduxjs/toolkit';

//Creamos la interface del estado que queremos guardar:
interface CounterState {
  value: number;
}

//Generamos un estado inicial:
const initialState: CounterState = {
  value: 0,
};

//Creamos el slice: esta es la parte del estado que contiene las acciones y los reducers.
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

//exportamos las acciones y el reducer:
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

//Las acciones las consumiremos en...
//El reducer lo consumiremos en el store.