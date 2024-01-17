import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import LocationDetails from "./components/LocationDetails";
import Map from "./components/Map";
import apiClient from "./services/apiClient";

function App() {
  const [data,setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [ipAddress, setIpAddress] = useState(0);


  // handling ip address from the search input
  const handleIpSearch = (ipAddress) => {
    setIpAddress(ipAddress);
  };

  const searchIpLocation = () => {
    apiClient
    .get("/country,city", {
      params: {
        ipAddress: ipAddress,
      },
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    searchIpLocation();
  }, []);
  return (
    <div className="relative">
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
      {isLoading && <div  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-2xl ">
        <div>
          Loading...
        </div>
      </div>}
    </div>
  );
}

export default App;
