import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";

configure({ adapter: new Adapter() });

import Box from "components/Box";

describe("Box", () => {
  it("should render box", () => {
    const wrapper = shallow(<Box />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with children", () => {
    const wrapper = shallow(<Box>Child Content</Box>);
    expect(wrapper).toMatchSnapshot();
  });
});