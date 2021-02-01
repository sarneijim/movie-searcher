import * as actionTypes from "./actionTypes";

const initialState: CatalogState = {
  filter: "",
  catalog: [],
};
const reducer = (
  state: CatalogState = initialState,
  action: CatalogAction
): CatalogState => {
  switch (action.type) {
    case actionTypes.UPDATE_CATALOG:
      return {
        ...state,
        catalog: [...action.catalog],
      };
  }
  return state;
};

export default reducer;
