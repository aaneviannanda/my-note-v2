import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes , deleteNote, unarchiveNote } from "../utils/local-data";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { CardNotes } from "../components/CardNotes";

export const ArchivePages = () => {
  const [data, setData] = useState([]);
  const [statusNotes, setStatusNotes] = useState("");
  const [SearchParams, setSearchParams] = useSearchParams();

  const title = SearchParams.get("title") || "";
  
  const setSearchParamsHandler = (title) => {
    setSearchParams({ title});
  }

  useEffect( () => {
    setStatusNotes("archived");
      setData(getArchivedNotes());
    // if (!title) {
    //   // setData(getArchiveNotes());
    // } else {
    //   setData (
    //     getActiveNotes().filter( (dataNote) => 
    //       dataNote.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    //     )
    //   );
    // }
  },[data] );

  return (
    <div className="font-poppins">
      <NavBar />
      <SearchBar
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      <div className="grid grid-cols-3 gap-6 px-6 mt-4">
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
            <>data not found</>
          )};
      </div>
    </div>
  );
}
