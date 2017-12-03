import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";
configure({ adapter: new Adapter() });

import Header from "components/Header";

describe("Header", () => {
  it("should render without children", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with children", () => {
    const wrapper = shallow(<Header>Test Header</Header>);
    expect(wrapper).toMatchSnapshot();
  });
});
