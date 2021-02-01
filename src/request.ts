const apiPath = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500";

const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;

const createURL = (path: string, params: object) => {
  const queryParams: any = {
    ...{ api_key: apiKey },
    ...params,
  };
  let url = new URL(path);
  Object.keys(queryParams).forEach((key: string) => {
    const value: string = queryParams[key];
    url.searchParams.append(key, value);
  });
  return url.toString();
};

const allListRequest = (params: object = {}) => {
  const url = `${apiPath}/search/multi`;
  return fetch(createURL(url, params)).then((res) => res.json());
};

const movieListRequest = (params: object = {}) => {
  const url = `${apiPath}/search/movie`;
  return fetch(createURL(url, params)).then((res) => res.json());
};

const showListRequest = (params: object = {}) => {
  const url = `${apiPath}/search/tv`;
  return fetch(createURL(url, params)).then((res) => res.json());
};

const personListRequest = (params: object = {}) => {
  const url = `${apiPath}/search/person`;
  return fetch(createURL(url, params)).then((res) => res.json());
};

const movieRequest = (id: string, params: object = {}) => {
  const url = `${apiPath}/movie/${id}`;
  return fetch(createURL(url, params)).then((res) => res.json());
};

const tvRequest = (id: string, params: object = {}) => {
  const url = `${apiPath}/tv/${id}`;
  return fetch(createURL(url, params)).then((res) => res.json());
};

const personRequest = (id: string, params: object = {}) => {
  const url = `${apiPath}/person/${id}`;
  return fetch(createURL(url, params)).then((res) => res.json());
};

export {
  imgPath,
  movieListRequest,
  showListRequest,
  personListRequest,
  allListRequest,
  movieRequest,
  tvRequest,
  personRequest,
};
