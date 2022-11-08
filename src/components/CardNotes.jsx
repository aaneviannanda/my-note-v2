import React from "react";
import { useNavigate } from "react-router-dom";
import { DeleteNote } from "./DeleteNote";
import { showFormattedDate } from "../utils";
import parser from "html-react-parser";
import { FaFile, FaFileArchive } from "react-icons/fa";
import PropType from "prop-types";
import { archiveNote, unarchiveNote } from "../utils/network-data";

export const CardNotes = ({ data, statusNotes, getActiveNotes, getArchivedNotes }) => {
  const { id, title, body, createdAt } = data;
  const navigate = useNavigate();

  const handleArchiveNote = async (id) => {
    try {
      await archiveNote(id);
      getActiveNotes();
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  const handleUnArchiveNote = async (id) => {
    try {
      await unarchiveNote(id);
      getArchivedNotes();
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <>
      <div className="relative my-5 p-7 flex flex-col bg-teal-100 rounded-xl overflow-hidden drop-shadow-lg hover:bg-teal-200 hover:shadow-lg dark:bg-gray-700">
        <div className="flex justify-between mx-3">
          <button
            className={`border-none text-white text-base rounded-md px-5 py-2 ${statusNotes === "note" ? "bg-yellow-400 hover:bg-yellow-300 hover:text-black" : "bg-teal-400 hover:bg-red-400 hover:text-black"}`}
            onClick={(event) => {
              event.stopPropagation();
              if (statusNotes === "note") {
                handleArchiveNote(id);
              } else {
                handleUnArchiveNote(id);
              }
            }}
          >
            <span className="flex justify-center items-center  group-hover:text-black">
              {statusNotes === "note" ? (
                <>
                  <FaFileArchive />
                  <span className="px-2">Archive</span>
                </>
              ) : (
                <>
                  <FaFile />
                  <span className="px-2">Unarchive</span>
                </>
              )}
            </span>
          </button>
          <DeleteNote id={id}   getActiveNotes={getActiveNotes} getArchivedNotes={getArchivedNotes} statusNotes={statusNotes} />
        </div>
        <h1 className="mt-4 px-6 text-center font-bold text-lg cursor-pointer dark:text-white" onClick={() => navigate(`/notes/${id}`)}>
          {title}
        </h1>
        <div className="flex justify-between my-5">
          <p className="flex text-red-700 items-center dark:text-green-500">{showFormattedDate(createdAt)}</p>
        </div>
        <p className="text-justify dark:text-white">{parser(body)}</p>
      </div>
    </>
  );
};

CardNotes.propType = {
  data: PropType.object.isRequired,
  statusNotes: PropType.string.isRequired,
  getActiveNotes: PropType.func,
  getArchivedNotes: PropType.func,
};
