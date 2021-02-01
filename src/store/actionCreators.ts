import * as actionTypes from "./actionTypes";
import {
  movieListRequest,
  showListRequest,
  personListRequest,
  allListRequest,
} from "../request";

const updateCatalog = (filter: { text: string; type: string }) => {
  return requestList(actionTypes.UPDATE_CATALOG, filter);
};

const requestList = (type: string, filter: { text: string; type: string }) => {
  return async (dispatch: DispatchType) => {
    try {
      var response;
      // TMDB need query param for catalog calls
      const params: any = {
        query: filter.text || "a",
      };
      switch (filter.type) {
        case "movie":
          response = await movieListRequest(params);
          response.results = response.results.map((obj: IMedia) => ({
            ...obj,
            media_type: "movie",
          }));
          break;
        case "show":
          response = await showListRequest(params);
          response.results = response.results.map((obj: IMedia) => ({
            ...obj,
            media_type: "tv",
          }));
          break;
        case "actor":
          params.known_for_department = "Acting";
          response = await personListRequest(params);
          response.results = response.results.map((obj: IMedia) => ({
            ...obj,
            media_type: "person",
          }));
          break;
        default:
          response = await allListRequest(params);
      }
      const action: CatalogAction = {
        type,
        catalog: [...response.results],
      };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
};

export { updateCatalog };
