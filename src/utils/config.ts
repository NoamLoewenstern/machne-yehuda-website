import { trimChar } from './helpers';

const BASE_URL_NAME = import.meta.env.VITE_BASE_URL_NAME || '';
export const baseURLName = trimChar(BASE_URL_NAME, '/');

if (BASE_URL_NAME === undefined) {
  throw new Error('VITE_BASE_URL_NAME is undefined');
}
