import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
const mockStore = configureStore([]);

describe("Header", () => {
  let component: any;
  const store = mockStore({});

  beforeEach(() => {
    component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
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
