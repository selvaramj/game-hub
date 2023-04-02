import { AxiosRequestConfig } from 'axios';
import React, { useState, useEffect } from 'react';
import apiClient, { CanceledError } from '../services/api-client';
interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  reqConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...reqConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );
  return { data, error, isLoading };
};

export default useData;
