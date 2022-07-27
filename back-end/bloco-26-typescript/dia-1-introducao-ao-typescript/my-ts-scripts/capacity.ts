const capacityUnit = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertCap(valor: number, deUnit: string, paraUnit: string): number {
  const deU = capacityUnit.indexOf(deUnit);
  const para = capacityUnit.indexOf(paraUnit);
  const expo = (para - deU);
  return valor * Math.pow(10, expo)
}

console.log(convertCap(10, "kl", "ml"));