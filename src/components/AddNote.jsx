import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export const AddNote = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="fixed right-6 bottom-10 z-40">
                <div className="relative group">
                    <button
                        className="w-12 h-12 bg-pink-500 hover:bg-pink-300 rounded-xl cursor-pointer"
                        onClick={() => navigate("/notes/new")}
                    >
                        <span className="text-white flex justify-center">
                        <FaPlus />
                        </span>
                    </button>
                    <div className="absolute left-1 top-1 -z-10 rounded-2xl border-2 w-full h-full hidden group-hover:block border-pink-600"></div>
                </div>
            </div>
        </div>
    )
}
