const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2", () => {
  const result = calculadora.somar(2, 2);
  expect(result).toBe(4);
});
