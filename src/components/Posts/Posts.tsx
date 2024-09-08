import { CircularProgress, Alert, CardContent, Typography } from "@mui/material";
import usePost from "./UsePosts";
import { useState } from "react";
import Comments from "../Comments/Comments";
import "../../styles/posts.css";

const Posts: React.FC = () => {
    const {posts, status, error} = usePost();
    const [showComments, setShowComments] = useState<number>(0);

    if(status === "loading"){
        return (
            <CircularProgress/>
        );
    };
    if(status === "fail"){
        return (
            <Alert>{error}</Alert>
        );
    };

    return(
        <>
        <h1>Posts</h1>
        <ul className="postsList">
            {
                posts.map(p => {
                    return(
                        <>
                        <div className="postCard" onClick={()=>{setShowComments(p.id)}}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {p.title}
                                </Typography>
                                <Typography variant="body2">
                                    {p.body}
                                </Typography>
                            </CardContent>
                        </div>
                        {
                            showComments === p.id? 
                            <div>
                                <Comments id={p.id}/>
                                <button className="AppBtn" onClick={()=>{setShowComments(0)}}>Close</button>
                            </div>
                            : null
                        }
                        </>
                    )
                })
            }
        </ul>
        </>
    );

};

export default Posts;