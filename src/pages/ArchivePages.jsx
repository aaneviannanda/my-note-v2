import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes , deleteNote, unarchiveNote } from "../utils/local-data";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { CardNotes } from "../components/CardNotes";
import { NoteNotFound } from "../components/NoteNotFound";

export const ArchivePages = () => {
  const archiveNote = getArchivedNotes();
  const [data, setData] = useState(archiveNote);
  const [statusNotes, setStatusNotes] = useState("");
  const [SearchParams, setSearchParams] = useSearchParams();

  const title = SearchParams.get("title") || "";
  
  const setSearchParamsHandler = (title) => {
    setSearchParams({ title});
  }

  useEffect( () => {
    setStatusNotes("archived");
    if (!title) {
      setData(getArchivedNotes());
    } else {
      setData (
        getArchivedNotes().filter( (dataNote) => 
          dataNote.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  },[title] );

  return (
    <div className="font-poppins">
      <NavBar />
      <SearchBar
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 relative px-6 mt-4">
          {!!data && data.length !== 0 ? (
            data.map((item, index) => (
              <CardNotes
                data={item}
                key={index}
                statusNotes={statusNotes}
                onDelete={deleteNote}
                onChangeArchiveStatus={unarchiveNote}
                setData={setData}
                getArchivedNotes={getArchivedNotes}
              />
            ))
          ) : (
              <NoteNotFound className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}
      </div>
    </div>
  );
}
