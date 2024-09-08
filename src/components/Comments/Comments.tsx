import { Typography } from "@mui/material";
import useComments from "./useComments";
import "../../styles/comments.css";
import { useState } from "react";

interface ChildProps {
    id: number;
  }

const Comments: React.FC<ChildProps> = ({id})=>{
    const {comments} = useComments();
    const [edit, setEdit] = useState<number>(0);
    const [commentText, setCommentText] = useState<string>("");
 
    const postComments = comments.filter(c => c.postId === id);
    console.log(postComments);

    function handleEdit(event:any){
        if(edit > 0){
            if(!commentText){
                return alert("You must write a new comment to update.")
            }
            const body = document.getElementById("commentBody" + event.target.id)
            if (body){ body.innerText = commentText;}
            event.target.innerText = "Edit";
            return setEdit(0)
        }
        setEdit(parseInt(event.target.id));
        event.target.innerText = "Save";
    }

    function handleInputEdit(event:any){
        setCommentText(event.target.value);
    }

    return(
        <div className="commentsContent">
        <h4 className="commentsTitle">Comments</h4>
        {
            postComments.map(c=>{
                return(
                <div className="commentCard">
                    <h4>
                        {c.name}
                    </h4>
                    <Typography variant="body1" component="div">
                        {c.email}
                    </Typography>
                    <p id={"commentBody" + c.id}>
                        {c.body}
                    </p>
                    <div className="editForm">
                        <button 
                            className="AppBtn" 
                            id ={`${c.id}`}
                            onClick={handleEdit}
                        >Edit</button>
                        {
                            edit === c.id? 
                            <input
                                className="inputEdit"
                                id = {`${c.id}`}
                                onChange={handleInputEdit}
                            />
                            : null
                        }
                    </div>
                </div>
                )
            })
        }
        </div>
    )
}

export default Comments;