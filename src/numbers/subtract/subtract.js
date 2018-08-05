// @flow

function subtract(...numbers: Array<number>): number {
  return numbers.reduce((result: number, val: number): number => result - val);
}

export default subtract;
