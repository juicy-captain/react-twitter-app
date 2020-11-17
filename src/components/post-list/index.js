import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map((el) => {
        if (typeof el === "object" && isEmpty(el))
            return (
                <li key={el.label} className="list-group-item">
                    <PostListItem
                        onToggleImportant={() => onToggleImportant(el.id)}
                        onToggleLiked={() => onToggleLiked(el.id)}
                        onDelete={() => onDelete(el.id)}
                        {...el}
                    />
                </li>
            );
    });

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
