import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useFetchLocation = (endpoint, params) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    // fetching the location
    apiClient
      .get(endpoint, {
        params: {
          ipAddress: params,
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
    return () => controller.abort();
  }, []);

  return { data, isLoading, error };
};

export default useFetchLocation;
