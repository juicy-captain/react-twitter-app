import React from "react";
import "./post-status-filter.css";

const PostStatusFilter = ({ filter, onFilterSelect }) => {
    const buttons = [
        { name: "all", label: "All" },
        { name: "liked", label: "Liked" },
    ];

    const elements = buttons.map(({ name, label }) => {
        const active = filter === name;
        const className = active ? "btn-info" : "btn-outline-secondary";
        return (
            <button
                key={name}
                type="button"
                className={`btn ${className}`}
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        );
    });

    return <div className="btn-group">{elements}</div>;
};

export default PostStatusFilter;
