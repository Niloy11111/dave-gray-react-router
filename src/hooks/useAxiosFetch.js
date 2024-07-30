import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
