import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";
configure({ adapter: new Adapter() });

import Img from "containers/Img";
import testSrc from "../logo-small.svg";

describe("Img", () => {
  it("should render without", () => {
    const wrapper = shallow(<Img />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with src", () => {
    const wrapper = shallow(<Img srcSet={testSrc} />);
    expect(wrapper).toMatchSnapshot();
  });
});
