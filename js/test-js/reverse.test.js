import { reverseString } from "./main";

test("normal word success", () => {
  expect(reverseString("HELLO")).toBe("OLLEH");
});
