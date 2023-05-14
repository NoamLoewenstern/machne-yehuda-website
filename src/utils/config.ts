import { trimChar } from './helpers';

const BASE_URL_PATH = import.meta.env.BASE_URL_PATH || '';
export const BaseURLPath = '/' + trimChar(BASE_URL_PATH, '/');

if (BASE_URL_PATH === undefined) {
  throw new Error('VITE_BASE_URL_PATH is undefined');
}
