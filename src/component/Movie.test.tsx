import renderer from "react-test-renderer";
import Movie from "./Movie";

describe("Movie", () => {
  let component: any;
  beforeEach(() => {
    component = renderer.create(<Movie></Movie>);
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

  it("check httpRequest method", () => {
    let instance: any = component.getInstance();
    const utils = require("../request");
    const movieRequestSpy = jest
      .spyOn(utils, "movieRequest")
      .mockReturnValue({ id: 123 });
    instance.httpRequest("abc");
    expect(movieRequestSpy).toHaveBeenCalledWith("abc", {
      append_to_response: "credits",
    });
    movieRequestSpy.mockClear();
  });
});
