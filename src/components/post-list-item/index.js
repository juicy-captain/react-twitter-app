import React from "react";
import "./post-list-item.css";

const PostListItem = ({
    label,
    onDelete,
    onToggleImportant,
    onToggleLiked,
    important,
    like,
}) => {
    let classNames = "app-list-item d-flex justify-content-between";
    classNames = important ? (classNames += " important") : classNames;
    classNames = like ? (classNames += " like") : classNames;

    return (
        <div className={classNames}>
            <span
                onClick={() => onToggleLiked()}
                className="app-list-item-label"
            >
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm"
                    onClick={() => onToggleImportant()}
                >
                    <i className="fa fa-star"></i>
                </button>
                <button
                    onClick={() => onDelete()}
                    type="button"
                    className="btn-trash btn-sm"
                >
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    );
};

export default PostListItem;
