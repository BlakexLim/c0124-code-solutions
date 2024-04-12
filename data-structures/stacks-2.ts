import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  return countValues(stack);
}

export function maxValue(stack: Stack<number>): number {
  if (stack === undefined) {
    return -Infinity;
  } else {
    return maxValue(stack);
  }
}
