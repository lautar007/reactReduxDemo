//Primero importamos lo necesario: 
import { useEffect } from "react";
//Importamos los custom hooks tipados:
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
//importamos la función fetch:
import { fetchPosts } from "../../store/postsSlice";

//Esta función nos retornará los posts, junto con el status de la promesa y un error en caso de que lo haya. 

const usePost = ()=>{
    //seteamos el dispatch:
    const dispatch = useAppDispatch();
    //Con destructuring, traemos la información del store:
    const {posts, status, error} = useAppSelector((state) => state.posts);

    //Utilizando useEffect realizamos el fetch y le pasamos el dispatch como dependencia:
    useEffect(()=>{
        dispatch(fetchPosts());
    }, [dispatch]) 

    return {
        posts, status, error
    }
}

export default usePost;