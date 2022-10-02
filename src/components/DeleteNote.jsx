import React from 'react';
import { FaTrash } from 'react-icons/fa';
import PropType from 'prop-types';

export const DeleteNote = ( { 
  id, 
  onDelete,
  setdata,
  getActiveNotes,
  getArchivedNotes,
  statusNotes,
} ) => {
  return (
    <>
      <button
        className="px-5 py-2 rounded-md group bg-red-400 hover:bg-red-300"
        onClick={(event) => {
          event.stopPropagation();
          if (statusNotes === "note"){
            onDelete(id)
            setdata(getActiveNotes);
          } else {
            onDelete(id)
            setdata(getArchivedNotes);
          }
        }}
      >
        <FaTrash className="text-white text-center font-bold group-hover:text-black"/>
      </button>
    </>
  )
}

DeleteNote.propType = {
  id: PropType.string.isRequired,
  onDelete: PropType.func.isRequired,
  setdata: PropType.func.isRequired,
  getActiveNotes: PropType.func.isRequired,
  getArchivedNotes: PropType.func.isRequired,
  statusNotes: PropType.string.isRequired,
}
