const BASE_URL = 'https://restcountries.com/v3.1/all?';


export const getAllCountry = async () => {
    const informationsUrl = BASE_URL + "fields=capital,name";
    let response = await fetch(informationsUrl, {
      credentials: "include",
      method: "GET",
    });
    return await response.json();
  };

  export const getAllPopulation = async () => {
    const informationsUrl = BASE_URL + "fields=capital,population";
    let response = await fetch(informationsUrl, {
      credentials: "include",
      method: "GET",
    });
    return await response.json();
  };