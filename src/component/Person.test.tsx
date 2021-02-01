import renderer from "react-test-renderer";
import Person from "./Person";

describe("Person", () => {
  let component: any;
  beforeEach(() => {
    component = renderer.create(<Person></Person>);
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
    const personRequestSpy = jest
      .spyOn(utils, "personRequest")
      .mockReturnValue({ id: 123 });
    instance.httpRequest("abc");
    expect(personRequestSpy).toHaveBeenCalledWith("abc");
    personRequestSpy.mockClear();
  });
});
