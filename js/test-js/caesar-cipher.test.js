import { caesarCipher } from "./main";

test("normal word success", () => {
  expect(caesarCipher("HELLO", 1)).toBe("IFMMP");
});

test("z overflow", () => {
  expect(caesarCipher("ZAZA", 1)).toBe("ABAB");
});
