export function round(number) {
  return Math.round(number * 100) / 100;
}

export function convert(number) {
  if (number === null) {
    return 0;
  }

  switch (String(Math.round(number)).length) {
    case 1:
    case 2:
    case 3:
      return Math.round(number * 100) / 100;
    case 4:
    case 5:
    case 6:
      return `${Math.round((number / 1000) * 100) / 100}T`;
    case 7:
    case 8:
    case 9:
      return `${Math.round((number / 1000000) * 100) / 100}M`;
    case 10:
    case 11:
    case 12:
      return `${Math.round((number / 1000000000) * 100) / 100}B`;
    default:
      return `${Math.round((number / 1000000000000) * 100) / 100}T`;
  }
}
