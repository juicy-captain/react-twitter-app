import React, { useState } from "react";
import AppHeder from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import "./app.css";

const App = () => {
    const state = {
        data: [
            {
                label: "Going to learn React",
                important: true,
                like: false,
                id: 1,
            },
            { label: "That is so good", important: false, like: false, id: 2 },
            {
                label: "I need a break...",
                important: false,
                like: true,
                id: 3,
            },
        ],
        term: "",
        filter: "all",
    };

    const [maxId, setId] = useState(4);
    const [item, setUpdateList] = useState(state);
    const { data, term, filter } = item;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;
    const visiblePosts = filterPost(searchPost(data, term), filter);

    function deleteItemFunction(id) {
        const index = data.findIndex((el) => el.id === id);
        const newData = {
            ...item,
            data: [...data.slice(0, index), ...data.slice(index + 1)],
        };
        setUpdateList(newData);
    }
    function addItemFunction(body) {
        setId(maxId + 1);
        const newItem = {
            label: body,
            important: false,
            id: maxId,
        };
        const newArr = { ...item, data: [...data, newItem] };
        setUpdateList(newArr);
    }
    function toggleImportant(id) {
        const index = data.findIndex((el) => el.id === id);
        const old = data[index];
        const newItem = { ...old, important: !old.important };
        const newArr = {
            ...item,
            data: [...data.slice(0, index), newItem, ...data.slice(index + 1)],
        };
        setUpdateList(newArr);
    }
    function toggleLiked(id) {
        const index = data.findIndex((el) => el.id === id);
        const old = data[index];
        const newItem = { ...old, like: !old.like };
        const newArr = {
            ...item,
            data: [...data.slice(0, index), newItem, ...data.slice(index + 1)],
        };
        setUpdateList(newArr);
    }

    function searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => item.label.indexOf(term) > -1);
    }
    function onUpdateSearch(term) {
        setUpdateList({ ...item, term: term });
    }
    function filterPost(items, filter) {
        if (filter === "liked") {
            return items.filter((el) => el.like);
        } else {
            return items;
        }
    }
    function onFilterSelect(filter) {
        setUpdateList({ ...item, filter: filter });
    }

    return (
        <div className="app">
            <AppHeder liked={liked} allPosts={allPosts} />
            <div className="search-panel d-flex">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={onFilterSelect}
                />
            </div>
            <PostList
                onToggleImportant={toggleImportant}
                onToggleLiked={toggleLiked}
                onDelete={deleteItemFunction}
                posts={visiblePosts}
            />
            <PostAddForm onAdd={addItemFunction} />
        </div>
    );
};

export default App;
