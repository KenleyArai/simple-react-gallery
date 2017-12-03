import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";
configure({ adapter: new Adapter() });

import Content from "components/Content";

describe("Content", () => {
  it("should render without Content", () => {
    const wrapper = shallow(<Content />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render wtih Content", () => {
    const wrapper = shallow(
      <Content>
        pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu
        dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum
        suspendisse ultrices gravida dictum fusce ut placerat orci nulla
        pellentesque dignissim enim sit amet venenatis urna cursus eget nunc
        scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt
        augue interdum velit euismod in pellentesque massa placerat duis
        ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante
        metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu
        non odio euismod lacinia at quis risus sed vulputate odio ut enim
        blandit volutpat maecenas volutpat blandit aliquam etiam erat velit
        scelerisque in dictum non consectetur a erat nam at lectus urna duis
        convallis convallis tellus id interdum velit laoreet id donec ultrices
        tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in
        mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non
        tellus orci ac auctor augue mauris augue neque gravida in fermentum et
        sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque
        eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
        feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo
        in vitae turpis massa sed elementum tempus egestas sed sed risus pretium
        quam vulputate dignissim suspendisse in est ante in nibh mauris cursus
        mattis molestie a iaculis at erat pellentesque adipiscing commodo elit
        at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis
        urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor
        dignissim convallis
      </Content>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
