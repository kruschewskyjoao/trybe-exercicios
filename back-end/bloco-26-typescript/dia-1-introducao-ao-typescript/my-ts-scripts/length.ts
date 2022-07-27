const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, fromUnit: string, toUnit: string) : number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const expoent = (toIndex - fromIndex);
  return value * Math.pow(10, expoent);
}

console.log(convert(10, "km", "m"));