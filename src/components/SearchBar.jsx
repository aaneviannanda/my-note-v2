import React from "react";
import PropType from "prop-types";

export const SearchBar = ({ title, setSearchParamsHandler }) => {
  return (
    <>
      <div className="w-full mt-6 px-6">
        <form>
          <input
            type="search"
            className="w-full text-xl p-3 rounded-md border-2 border-violet-200 dark:bg-black dark:text-white"
            placeholder="Search by title.."
            name="search"
            value={title}
            onChange={(event) => setSearchParamsHandler(event.target.value)}
            maxLength={50}
          />
        </form>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  title: PropType.string.isRequired,
  setSearchParamsHandler: PropType.func.isRequired,
};
