export const isHourGreaterThan = (hourA: string, hourB: string) => {
  const a = hourA.split(':');
  const b = hourB.split(':');

  const dateA = new Date();
  const dateB = new Date();
  dateA.setHours(+a[0]);
  dateA.setMinutes(+a[1]);
  dateB.setHours(+b[0]);
  dateB.setMinutes(+b[1]);

  return dateA.getTime() - dateB.getTime() > 0;
};

export const isHourSameAs = (hourA: string, hourB: string) => {
  const a = hourA.split(':');
  const b = hourB.split(':');

  return +a[0] === +b[0] && +a[1] === +b[1];
};

export const isMobile = window.innerWidth <= 500;
export const isTablet = window.innerWidth <= 1000;

export function trimChar(str: string, char: string) {
  if (char === '' || str === '') return str;
  while (str.charAt(0) === char) {
    str = str.slice(1);
  }
  while (str.charAt(str.length - 1) === char) {
    str = str.slice(0, -1);
  }

  return str;
}
