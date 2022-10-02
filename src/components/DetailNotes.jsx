import React from 'react';
import { useNavigate } from 'react-router-dom'
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import PropType from "prop-types";



export const DetailNotes = ( { data } ) => {
    const { title, createdAt, body } = data;
    const navigate = useNavigate();

  return (
    <div>
        <div>
            <button 
              className="w-10 h-10 bg-pink-500 hover:bg-pink-300 rounded-md cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <span className="text-white flex justify-center">
                <FaRegArrowAltCircleLeft />
              </span>
            </button>
        </div>
        <div className="rounded-md mt-5 px-7 pb-7 pt-3 bg-teal-100">
          <div className="flex items-center justify-between">
            <h2 className="my-5 text-center font-bold text-3xl">{title}</h2>
            <p className="text-yellow-700">{showFormattedDate(createdAt)}</p>
          </div>
          <p>{parser(body)}</p>
        </div>
    </div>
  )
}

DetailNotes.propTypes = {
  data: PropType.object.isRequired,
};


