//Aquí definimos el tipado de los hooks para poder acceder al store y despachar acciones. 
//Como estamos usando TS necesitamos tipar correctamente estos hooks, por eso usamos custom hooks: 

//Primero importamos todo lo necesario: 
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//Supongo que esta configuración es siempre igual. 