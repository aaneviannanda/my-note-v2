import React from 'react';

export const DeleteNote = ( { 
  id, 
  onDelete,
  setdata,
  getArchiveNotes,
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
            setdata(getArchiveNotes);
          } else {
            onDelete(id)
            setdata(getArchivedNotes);
          }
        }}
      >
        <span className="text-white text-center font-bold group-hover:text-black">X</span>
      </button>
    </>
  )
}
