import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchComments } from "../../store/commentsSlice";

const useComments = () =>{
    const dispatch = useAppDispatch();
    const {comments, status, error} = useAppSelector((state) => state.comments);

    useEffect(()=>{
        dispatch(fetchComments());
    }, [dispatch]);

    return {
        comments, status, error
    };
};

export default useComments;