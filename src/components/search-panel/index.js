import React, { useState } from "react";
import "./search-panel.css";
const SearchPanel = (props) => {
    const [term, setTerm] = useState("");

    function onUpdateSearch(e) {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="post search"
            onChange={onUpdateSearch}
        />
    );
};

export default SearchPanel;
