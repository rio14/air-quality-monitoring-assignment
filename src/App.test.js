import React from "react";
import App from "./App";
import { mount } from "enzyme";

describe("team member test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("loading", () => {
    expect(wrapper.find("#connection").text()).toBe("Connecting");
  });

  test("render the title of dashboard", () => {
    expect(wrapper.find("#title").text()).toContain("air quality monitoring");
  });
});
