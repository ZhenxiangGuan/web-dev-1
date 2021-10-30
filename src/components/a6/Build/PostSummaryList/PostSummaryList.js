import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import post from "./post.json"

const PostSummaryList = () => {
    return (
            <ul class="list-group">
            
            {post.map(post => {
                return( <PostSummaryItem post={post}/>
                );
            })}
            
            </ul>
); }

export default PostSummaryList;