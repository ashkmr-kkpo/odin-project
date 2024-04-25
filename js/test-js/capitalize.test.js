import { capitalize } from "./main";

test("normal word success", () => {
  expect(capitalize("ababab")).toBe("Ababab");
});

test("empty", () => {
  expect(capitalize("")).toBe("");
});

test("already capital success", () => {
  expect(capitalize("HHHHAAooooo")).toBe("HHHHAAooooo");
});

test("number start success", () => {
  expect(capitalize("1HHHHAAooooo")).toBe("1HHHHAAooooo");
});
