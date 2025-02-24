// calculator.test.js
const { add, subtract, multiply, divide } = require("./calculator");

describe("Calculator Tests", () => {
  test("adds two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers correctly", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divides two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
