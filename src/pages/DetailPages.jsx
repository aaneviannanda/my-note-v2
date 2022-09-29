import React from 'react';
import { useParams } from "react-router-dom";
import { getNoteById } from '../utils/local-data';
import { NavBar } from '../components/NavBar';
import { DetailNotes } from '../components/DetailNotes';

export const DetailPages = () => {
    const { id } = useParams();
    const data = getNoteById(id);
  return (
    <>
        <NavBar />
        {!!data && Object.keys(data).length !== 0 ? (
            <DetailNotes
            data={data}
        />
        ) : (
            <>Data gaonok</>
        ) }
    </>
  )
}
