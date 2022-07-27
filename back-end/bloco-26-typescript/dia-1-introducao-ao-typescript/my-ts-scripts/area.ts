const areaUnit = ["km2", "hm2", "dam2", "m2", "dm2", "cm2", "mm2"];

function convertArea(valor: number, deUnit: string, paraUnit: string): number {
  const deU = areaUnit.indexOf(deUnit);
  const para = areaUnit.indexOf(paraUnit);
  const expo = (para - deU);
  return valor * Math.pow(100, expo)
}

console.log(convertArea(10, "km2", "m2"));