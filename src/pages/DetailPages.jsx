import React from 'react';
import { useParams } from "react-router-dom";
import { getNoteById } from '../utils/local-data';
import { NavBar } from '../components/NavBar';
import { DetailNotes } from '../components/DetailNotes';
import { NoteNotFound } from '../components/NoteNotFound';

export const DetailPages = () => {
    const { id } = useParams();
    const data = getNoteById(id);
  return (
    <>
      <div className="font-poppins">
          <NavBar />
          <div className="m-10 relative">
            {!!data && Object.keys(data).length !== 0 ? (
              <DetailNotes
                data={data}
              />
            ) : (
                <NoteNotFound className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            ) }
          </div>
      </div>
    </>
  )
}
