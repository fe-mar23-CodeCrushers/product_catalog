import { Phone } from '../types/phone';

// eslint-disable-next-line
const API_URL = `https://ozwiena.github.io/Data/phones.json`;

export const getPhones = (): Promise<Phone[]> => {
  return fetch(API_URL).then(response =>
   response.json())
};
