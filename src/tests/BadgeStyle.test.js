import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import "jest-styled-components";

configure({ adapter: new Adapter() });

import blank from "../images/blank.svg";
import linkedin from "../images/linkedin.svg";

import { background_helper } from "../styled/BadgeStyle";

describe("BadgeStyled", () => {
  describe("Helper Functions", () => {
    describe("background_helper", () => {
      it("should return blank icon when type is blank", () => {
        expect(background_helper("blank")).toBe(blank);
      });
      it("should return linkedin icon when type is linkedin", () => {
        expect(background_helper("linkedin")).toBe(linkedin);
      });
    });
  });
});
