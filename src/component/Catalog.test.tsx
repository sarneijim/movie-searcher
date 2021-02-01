import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import Catalog from "./Catalog";
import { BrowserRouter, Route } from "react-router-dom";
const mockStore = configureStore([]);

describe("Catalog", () => {
  let component: any;
  const store = mockStore({
    catalog: [
      { name: "abc", id: 1 },
      { name: "bcd", id: 2 },
    ],
  });

  beforeEach(() => {
    component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Catalog width="lg" />
        </Provider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    component = null;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should match the snapshot", () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
