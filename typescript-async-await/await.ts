import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

function readOnce(): Promise<void> {
  return read('foo/bar.html').then((msg) =>
    console.log(elapsed(), 'readOnce:', msg)
  );
}

// async function asyncReadOnce(): Promise<void> {
//   const result = await read('foo/bar.html');
//   console.log(result);
// }
// asyncReadOnce();

function readSeveral(): Promise<void> {
  return read('foo1/bar.html')
    .then((msg) => {
      console.log(elapsed(), 'readSeveral1:', msg);
      return read('foo2/bar.html');
    })
    .then((msg) => {
      console.log(elapsed(), 'readSeveral2:', msg);
      return read('foo3/bar.html');
    })
    .then((msg) => console.log(elapsed(), 'readSeveral3:', msg));
}

// async function asyncReadSeveral(): Promise<void> {
//   const read1 = await read('foo1/bar.html');
//   console.log(read1);
//   const readSev1 = await (elapsed(), 'readSeveral1:');
//   console.log(readSev1);
//   const read2 = await read('foo2/bar.html');
//   console.log(read2);
//   const read3 = await read('foo3/bar.html');
//   console.log(read3);
// }
// asyncReadSeveral();

function readChained(): Promise<void> {
  return read('foo-chain/bar.html')
    .then((msg1) => {
      console.log(elapsed(), 'readChained1:', msg1);
      return read(msg1);
    })
    .then((msg2) => {
      console.log(elapsed(), 'readChained2:', msg2);
      return read(msg2);
    })
    .then((msg3) => console.log(elapsed(), 'readChained3:', msg3));
}

// async function asyncReadChained (): Promise<void> {
//   const read1 = await read('foo/bar.html');
//   console.log(read1);
//   const readChained2 = await read('readChained2:');
//   console.log(readChained2);
//   const readChained3 = await read('readChained3:')

// }

readOnce()
  .then(() => readSeveral())
  .then(() => readChained());
