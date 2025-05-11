import { useEffect, useState } from 'react';

export default function ProductsLoader({ fetchFn, args = [], dependencies = [] }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('PENDING');

const fetchData = (firstFetch) => {
    firstFetch && setFetchStatus('LOADING');
    fetchFn(...args)
      .then((result) => {
        setFetchStatus('SUCCESS');
        setData(result);
      })
      .catch((err) => {
        setFetchStatus('FAILED');
        setError(err);
      });
  };
  useEffect(() => {
    fetchData(true);
  }, dependencies);

  if (fetchStatus === 'LOADING')
    return <p>Loading ...</p>;
  if (fetchStatus === 'FAILED')
    return <p>Failed to fetch</p>

  return {
    reset: fetchData,
    data,
    error,
    isSuccess: fetchStatus === 'SUCCESS',
    isFail: fetchStatus === 'FAILED',
    isLoading: fetchStatus === 'LOADING',
  };
}