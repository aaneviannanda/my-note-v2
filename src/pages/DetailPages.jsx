/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { DetailNotes } from "../components/DetailNotes";
import { NoteNotFound } from "../components/NoteNotFound";
import { getNote } from "../utils/network-data";
import { Loader } from "../components/Loader";

export const DetailPages = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    handleGetNoteById();
  }, []);

  const handleGetNoteById = async () => {
    try {
      setLoading(true);
      const { error, data } = await getNote(id);

      if (!error) {
        setData(data);
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
    setLoading(false)
  };
  return (
    <>
      <div className="font-poppins">
        <NavBar />
        {loading ? (
          <Loader />
        ) : (
          <div className="m-10 relative">{!!data && Object.keys(data).length !== 0 ? <DetailNotes data={data} /> : <NoteNotFound className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}</div>
        )}
      </div>
    </>
  );
};
