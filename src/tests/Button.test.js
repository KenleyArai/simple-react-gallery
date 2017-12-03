import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";
configure({ adapter: new Adapter() });

import Button from "containers/Button";

describe("Button", () => {
  it("should render", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render string children", () => {
    const wrapper = shallow(<Button>String Text!</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render when active", () => {
    const wrapper = shallow(<Button active />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render when string children and active", () => {
    const wrapper = shallow(<Button active>Active Text!</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
