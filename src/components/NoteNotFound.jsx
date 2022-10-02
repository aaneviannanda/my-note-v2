import React from 'react';
import PropType from "prop-types";

export const NoteNotFound = ( { className } ) => {
    return (
        <div className={className}>
            <div className="flex flex-col items-center">
                <span className="text-6xl mb-2">&#128219;</span>
                <h2 className="text-3xl font-bold text-center">Note not found!</h2>
            </div>
        </div>
    )
}

NoteNotFound.propType = {
    className: PropType.string,
};
  
