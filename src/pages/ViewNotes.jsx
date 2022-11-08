/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { CardNotes } from "../components/CardNotes";
import { AddNote } from "../components/AddNote";
import { NoteNotFound } from "../components/NoteNotFound";
import { Loader } from "../components/Loader";
import { getActiveNotes } from "../utils/network-data";

export const ViewNotes = () => {
  const [data, setData] = useState([]);
  const [statusNotes, setStatusNotes] = useState("");
  const [SearchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState(false);

  const title = SearchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  useEffect(() => {
    setStatusNotes("note");
    if (!initialData) {
      handleGetActiveNotes();
    }

    if (initialData) {
      let tempData = [...data];
      if (!title) {
        handleGetActiveNotes();
      } else {
        setData(tempData.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())));
      }
    }
  }, [title]);

  const handleGetActiveNotes = async () => {
    try {
      setLoading(true);
      const { error, data } = await getActiveNotes();

      if (!error) {
        setData(data);
        setInitialData(true);
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
    setLoading(false);
  };

  return (
    <div className="font-poppins">
      <NavBar />
      <SearchBar title={title} setSearchParamsHandler={setSearchParamsHandler} />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 relative px-6 mt-4">
          {!!data && data.length !== 0 ? (
            data.map((item, index) => <CardNotes data={item} key={index} statusNotes={statusNotes} getActiveNotes={handleGetActiveNotes} />)
          ) : (
            <NoteNotFound className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      )}
      <AddNote />
    </div>
  );
};
