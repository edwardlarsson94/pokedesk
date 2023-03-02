import { API_HOST } from "../utils/constant";

export const getPokemonsApi = async () => {
  try {
    const response = await fetch(`${API_HOST}/pokemon/?limit=20&offset=0`);
    const json = await response.json();
    return json.results;
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
