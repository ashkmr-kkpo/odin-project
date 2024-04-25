import { reverseString } from "./main";

test("normal word success", () => {
  expect(reverseString("HELLO")).toBe("OLLEH");
});

test("empty", () => {
  expect(reverseString("")).toBe("");
});

test("12345", () => {
  expect(reverseString("12345")).toBe("54321");
});
