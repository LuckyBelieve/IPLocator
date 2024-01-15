import React from "react";

function LocationDetails() {
  return (
    <div className=" bg-white p-5 md:p-10 gap-2 flex flex-col md:flex-row justify-around items-center md:items-start border  rounded-xl absolute -bottom-[60%] md:-bottom-[40%] w-[80%]">
      <div className="flex flex-col items-center md:items-start gap-1 md:gap-5 xl:pr-10">
        <h1 className=" text-xs md:text-sm text-gray-500 font-sans">IP ADDRESS</h1>
        <h1 className="font-semibold md:text-lg lg:text-2xl uppercase">192.212.172.101</h1>
      </div>
      <div className="flex flex-col items-center md:items-start gap-1 md:gap-5 px-5 lg:px-10 md:border-l-2">
        <h1 className=" text-xs md:text-sm text-gray-500 font-sans">LOCATION</h1>
        <div className="flex gap-2  flex-row md:flex-col">
          <h1 className="font-semibold md:text-lg lg:text-2xl uppercase whitespace-pre">
            Brooklyn,NY
          </h1>
          <h1 className="font-semibold md:text-lg lg:text-2xl uppercase whitespace-pre">
            10001
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start gap-1 md:gap-5 px-5 lg:px-10 md:border-l-2">
        <h1 className=" text-xs md:text-sm text-gray-500 font-sans">TIMEZONE</h1>
        <h1 className="font-semibold md:text-lg lg:text-2xl uppercase">utc-05:00</h1>
      </div>
      <div className="flex flex-col items-center md:items-start gap-1 md:gap-5 px-5 lg:px-10 md:border-l-2">
        <h1 className=" text-xs md:text-sm text-gray-500 font-sans">ISP</h1>
        <div className="flex gap-2  flex-row md:flex-col">
          <h1 className="font-semibold md:text-lg lg:text-2xl uppercase">spaceX</h1>
          <h1 className="font-semibold md:text-lg lg:text-2xl uppercase">starlink</h1>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
