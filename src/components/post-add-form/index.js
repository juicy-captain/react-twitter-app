import React, { useState } from "react";
import "./post-add-form.css";
const PostAddForm = ({ onAdd }) => {
    const [text, setText] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        text.trim();
        if (text) {
            onAdd(text);
            setText("");
        }
    }
    function onChange(e) {
        setText(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="what do you mind"
                className="form-control new-post-label"
                onChange={onChange}
                value={text}
            />
            <button type="submit" className="btn btn-outline-secondary">
                Add
            </button>
        </form>
    );
};

export default PostAddForm;
