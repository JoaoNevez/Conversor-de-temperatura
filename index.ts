const inputValor = document.getElementById("valor") as HTMLInputElement;
const selectTipo = document.getElementById("tipo") as HTMLSelectElement;
const botao = document.getElementById("converter") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

function celsiusToKelvin(c: number): number {
  return c + 273.15;
}

function fahrenheitToCelsius(f: number): number {
  return ((f - 32) * 5) / 9;
}

function kelvinToCelsius(k: number): number {
  return k - 273.15;
}

botao.addEventListener("click", () => {
  const valor = Number(inputValor.value);
  const tipo = selectTipo.value;

  if (isNaN(valor)) {
    resultado.textContent = "❌ Digite um valor válido!";
    return;
  }

  let res: number;

  switch (tipo) {
    case "c-f":
      res = celsiusToFahrenheit(valor);
      resultado.textContent = `${valor}°C = ${res.toFixed(2)}°F`;
      break;
    case "c-k":
      res = celsiusToKelvin(valor);
      resultado.textContent = `${valor}°C = ${res.toFixed(2)}K`;
      break;
    case "f-c":
      res = fahrenheitToCelsius(valor);
      resultado.textContent = `${valor}°F = ${res.toFixed(2)}°C`;
      break;
    case "k-c":
      res = kelvinToCelsius(valor);
      resultado.textContent = `${valor}K = ${res.toFixed(2)}°C`;
      break;
    default:
      resultado.textContent = "❌ Conversão inválida.";
  }
});
