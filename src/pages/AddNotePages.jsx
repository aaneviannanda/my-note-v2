import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { addNote } from '../utils/local-data';
import { FaPlus } from "react-icons/fa";


export const AddNotePages = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  
    const navigate = useNavigate();
  
    return (
        <>
            <div className="font-poppins">
                <NavBar />
                <div className="mx-10 mt-0">
                <form
                onSubmit={(event) => {
                    event.preventDefault();
                    addNote({
                    title: title,
                    body: body,
                    });
                    navigate("/");
                    setTitle("");
                    setBody("");
                }}
                >
                <div className="my-5">
                    <input
                    className="w-full text-xl p-3 rounded-md border-2 border-violet-200"
                    type="text"
                    name="title"
                    placeholder="input your note title..."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                    />
                </div>
        
                <div>
                    <div
                    className="w-full h-64 p-3 rounded-md border-2 border-violet-200"
                    placeholder="input your note body..."
                    contentEditable
                    onInput={(event) => {
                        setBody(event.target.innerText);
                    }}
                    />
                </div>
        
                <button className="my-5 p-4 rounded-md group text-white bg-teal-500 hover:bg-teal-300">
                    <span className="flex items-center text-white group-hover:text-black">
                    <FaPlus className="mr-2" /> Add
                    </span>
                </button>
                </form>
                </div>
            </div>
        </>
    )
}
