import { App } from "../src/app";

describe("App", () => {
  test("greeting()", () => {
    expect(new App().greeting()).toStrictEqual("Hello world");
  });
});
