import React from "react";
import renderer from "react-test-renderer";
import { App } from "../src/App";

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test("Render Component", () => {
  const component = renderer.create(<App></App>);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
