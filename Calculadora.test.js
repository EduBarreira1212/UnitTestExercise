const calculadora = require("./Calculadora.js");

test('distância 120 e combsutivel é gasolina', () => {
    expect(calculadora.CalcularKM(120, "gasolina")).toBe(8);
});

test('distância 200 e combsutivel é etanol', () => {
    expect(calculadora.CalcularKM(200, "etanol")).toBe(18);
});

test('distância é positiva e inteira', () => {
    expect(calculadora.CalcularKM(-5, "gasolina")).toBe(false);
});

test('distância é positiva e inteira', () => {
    expect(calculadora.CalcularKM(5.2, "etanol")).toBe(false);
});

test('distância é positiva e inteira', () => {
    expect(calculadora.CalcularKM(250, "diesel")).toBe(false);
});