import { sum, divide, multiply, subtract } from "./main";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds dec", () => {
  expect(sum(1.2123, 2.334)).toBe(3.55);
});

test("mult", () => {
  expect(multiply(3.3, 4)).toBe(13.2);
});

test("div", () => {
  expect(divide(4, 3)).toBe(1.33);
});

test("sub", () => {
  expect(subtract(4, 3.3)).toBe(0.7);
});
