import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f3b81fe70f5b4396b9280379536f51fe',
  },
});
export { CanceledError };
