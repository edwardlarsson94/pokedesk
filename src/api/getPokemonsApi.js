import { API_HOST } from "../utils/constant";

export const getPokemonsApi = async (nextUrl) => {
  try {
    const url = `${API_HOST}/pokemon`;
    const response = await fetch(nextUrl ? nextUrl : url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonsDetailsApi = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
