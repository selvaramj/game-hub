import axios, { AxiosRequestConfig, CanceledError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f3b81fe70f5b4396b9280379536f51fe',
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig = {}) => {
    console.log('config', config);

    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number) =>
    axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
}
export { CanceledError, APIClient };
