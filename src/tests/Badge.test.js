import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";

configure({ adapter: new Adapter() });

import Badge from "containers/Badge";

describe("Badge", () => {
  it("should render blank badge with no props", () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render linkedin badge with linkedin props", () => {
    const wrapper = shallow(<Badge linkedin />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render facebook badge with facebook props", () => {
    const wrapper = shallow(<Badge facebook />);
    expect(wrapper).toMatchSnapshot();
  });
});
