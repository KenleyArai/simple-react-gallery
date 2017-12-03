import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Bar from "components/Bar";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Bar", () => {
  it("should render bar", () => {
    const wrapper = shallow(<Bar />);
  });
});
