import React from "react";
import "./app-header.css";
const AppHeader = ({ liked, allPosts }) => {
    return (
        <div className="app-header d-flex">
            <h1>Andrei Golicin</h1>
            <h2>
                {allPosts} posts, {liked} favorites
            </h2>
        </div>
    );
};

export default AppHeader;
