import React from "react";
import { FaTrash } from "react-icons/fa";
import PropType from "prop-types";
import { deleteNote } from "../utils/network-data";

export const DeleteNote = ( { 
  id, 
  getActiveNotes,
  getArchivedNotes,
  statusNotes,
} ) => {
  const handleDeleteNote = async (id) => {
    try {
      if (statusNotes === "note") {
        await deleteNote(id);
        getActiveNotes();
      } else {
        await deleteNote(id);
        getArchivedNotes();
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <>
      <button
        className="px-5 py-2 rounded-md group bg-red-400 hover:bg-red-300"
        onClick={(event) => {
          event.stopPropagation();
          handleDeleteNote(id);
        }}
      >
        <FaTrash className="text-white text-center font-bold group-hover:text-black"/>
      </button>
    </>
  )
}

DeleteNote.propType = {
  id: PropType.string.isRequired,
  getActiveNotes: PropType.func,
  getArchivedNotes: PropType.func,
  statusNotes: PropType.string.isRequired,
}
