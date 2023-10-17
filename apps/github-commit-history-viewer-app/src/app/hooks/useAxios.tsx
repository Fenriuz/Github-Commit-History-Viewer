import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ApiError } from '@github-commit-history-viewer/shared/types';

export const useAxios = <T, D = unknown>(url: string, options: AxiosRequestConfig<D>) => {
  const [response, setResponse] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>();

  const fetchData = async () => {
    if (!url) return;
    setIsLoading(true);
    try {
      const res: AxiosResponse<T> = await axios(url, options);
      setResponse(res.data);
      setError(null);
    } catch (error) {
      if (axios.isAxiosError<ApiError>(error) && error.response?.data) {
        const { message, statusCode } = error.response.data;
        setError({ message, statusCode });
      } else {
        setError({
          message: 'An error has occurred, please try again later',
          statusCode: 500,
        });
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, isLoading, error };
};
