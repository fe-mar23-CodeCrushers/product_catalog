import { Phone } from '../types/phone';
import { PhoneExtended } from '../types/phoneExtended';

// eslint-disable-next-line
const API_URL = `https://ozwiena.github.io/Data/phones.json`;

export const getPhones = (): Promise<Phone[]> => {
  return fetch(API_URL).then(response =>
   response.json())
};

const API_URL_EXT = `https://ozwiena.github.io/Data/phones`;

export const getPhonesExtended = (): Promise<PhoneExtended[]> => {
  return fetch(API_URL_EXT).then(response =>
    response.json())
};

export const getPhoneDetails = (id: string) => {
  return fetch(`${API_URL_EXT}/${id}.json`)
    .then(response => response.json())
};