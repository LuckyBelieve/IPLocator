import { useState } from "react";
import SearchInput from "./components/SearchInput";
import LocationDetails from "./components/LocationDetails";
import Map from "./components/Map";
import apiClient from "./services/apiClient";
import useFetchLocation from "./hooks/useFetchLocation";

function App() {

  const { data, isLoading, error } = useFetchLocation(
    "/country,city",
    0
  );

  const [ipAddress, setIpAddress] = useState(0);
  const [fetchedLocation,setFetchedLocation] = useState(data);
  
  // handling ip address from the search input
  const handleIpSearch = (ipAddress) => {
    setIpAddress(ipAddress);
  };

  const searchIpLocation = () => {
    
  };

  return (
    <div>
      <div className=" z-30 relative flex flex-col items-center justify-center w-full bg-[url('/bgdesk.png')] bg-cover pb-32">
        <h1 className="text-3xl font-sans font-semibold py-5 text-white">
          IP Address Tracker
        </h1>
        <SearchInput
          handleIpSearch={handleIpSearch}
          search={searchIpLocation}
        />
        <LocationDetails Location={data} />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default App;
