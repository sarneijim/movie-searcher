import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import App from "./App";

const mockStore = configureStore([]);

describe("App", () => {
  let component: any;
  const store = mockStore({
    myState: "sample text",
  });
  beforeEach(() => {
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
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
