// primero importo configureStore de redux tools. 
import { configureStore } from '@reduxjs/toolkit';
//Una vez creados, importo los reducers:
import counterReducer from "./counterSlice";
import postsReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";

const store = configureStore({
  reducer: {
    // los reucers van aquí:
    counter: counterReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
});

export default store;

// Aquí exportamos los tipos de Rootstate y AppDispatch, Esto lo usaremos a la hora de definir el custom hook para acceder al store y despachar las acciones:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Una vez que tenemos al menos el primer reducer en el store lo siguiente es envolver la aplicación en el provider de redux.
//Eso lo hacemos en Main.tsx