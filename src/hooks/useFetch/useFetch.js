/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (url, type = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      if (type === null) {
        setData(responseData);
      } else {
        setData(responseData[type]);
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return {data, error, loading};
};

export default useFetch;
