/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  if (queue !== undefined) {
    return queue.peek();
  } else {
    return undefined;
  }
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
  return queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  if (queue !== undefined) {
    return queue.dequeue();
  }
  return undefined;
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  if (queue.peek() !== undefined) {
    return false;
  } else {
    return true;
  }
}
