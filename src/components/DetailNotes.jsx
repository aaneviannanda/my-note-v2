import React from 'react';
import { useNavigate } from 'react-router-dom'
import { showFormattedDate } from '../utils';



export const DetailNotes = ( { data } ) => {
    const { title, createdAt, body } = data;
    const navigate = useNavigate();

  return (
    <div>
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <div className="rounded-md mt-5 px-7 pb-7 pt-3 bg-violet-100">
      <div className="flex items-center justify-between">
        <h2 className="my-5 text-center font-bold text-3xl">{title}</h2>
        <p className="text-yellow-700">{showFormattedDate(createdAt)}</p>
      </div>
      <p>{body}</p>
    </div>
    </div>
  )
}

