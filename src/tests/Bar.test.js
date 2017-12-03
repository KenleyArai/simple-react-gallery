import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";

configure({ adapter: new Adapter() });

import Bar from "components/Bar";

describe("Bar", () => {
  it("should render bar", () => {
    const wrapper = shallow(<Bar />);
    expect(wrapper).toMatchSnapshot();
  });
});
