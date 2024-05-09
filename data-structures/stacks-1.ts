/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  if (stack !== undefined) {
    return stack.peek();
  } else {
    return undefined;
  }
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  return stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  if (stack !== undefined) {
    return stack.pop();
  } else {
    return undefined;
  }
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  if (stack.peek() !== undefined) {
    return false;
  } else {
    return true;
  }
}
