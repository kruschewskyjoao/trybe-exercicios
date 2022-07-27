const massUnit = ["kg", "Hg", "Decag", "g", "Decig", "Centig", "Mg"];

function convertMass(valor: number, deUnit: string, paraUnit: string): number {
  const deU = massUnit.indexOf(deUnit);
  const para = massUnit.indexOf(paraUnit);
  const expo = (para - deU);
  return valor * Math.pow(10, expo)
}

console.log(convertMass(10, "kg", "g"));