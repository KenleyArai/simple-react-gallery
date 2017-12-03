import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";
configure({ adapter: new Adapter() });

import LazyImg from "components/LazyImg";
import testSrc from "../logo-small.svg";

describe("LazyImg", () => {
  it("should render without src and srcSet", () => {
    const wrapper = shallow(<LazyImg />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with src", () => {
    const wrapper = shallow(<LazyImg src={testSrc} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render with srcSet", () => {
    const wrapper = shallow(<LazyImg srcSet={testSrc} />);
    expect(wrapper).toMatchSnapshot();
  });
});
