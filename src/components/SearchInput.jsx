import React, { useRef } from "react";

function SearchInput({ handleIpSearch ,search}) {

  return (
    <div className="flex w-[90%] md:w-full justify-center">
      <input
      onChange={(e)=>handleIpSearch(e.target.value)}
        type="text"
        placeholder="Search for any IP address or domain "
        className=" w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] outline-none border pl-5 rounded-l-lg"
      />
      <div className=" p-5 rounded-r-lg bg-black cursor-pointer" onClick={search}>
        <img src="/icon-arrow.svg" alt="icon" />
      </div>
    </div>
  );
}

export default SearchInput;
