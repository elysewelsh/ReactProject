import { useState, useEffect } from 'react';
 
export function useFetchData(url, options) {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    if (!url) return; // Don't fetch if URL is not provided
 
    const controller = new AbortController(); // For cleanup
    setResponseData(null); // Reset data on new fetch
    setError(null); // Reset error on new fetch
    setLoading(true);
 
    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        // const stringData = JSON.stringify(result)
        // setData(stringData);
        setResponseData(result);
      } catch (err) {
        if (err.name !== 'AbortError') { // Don't set error if aborted
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
 
    fetchData();

 
    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [url, options]); // Re-run if url or options change
    console.log("api result:" + responseData)
  const data = responseData;
  return { data, loading, error };
}
 
export default useFetchData;