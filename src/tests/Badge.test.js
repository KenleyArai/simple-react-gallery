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
  it("should render without props", () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper).toMatchSnapshot();
  });
});
