// @flow

function sum(...numbers: Array<number>): number {
  return numbers.reduce((result: number, val: number): number => result + val);
}

export default sum;
