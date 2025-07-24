import { open } from 'node:fs/promises';

let filehandle;
try {
  filehandle = await open('test.txt', 'r');
  const size = (await filehandle.stat()).size;
  const buffer = Buffer.alloc(size);
  await filehandle.read(buffer, 0, size, 0);
  console.log(buffer.toString());
  console.log(buffer);
} finally {
  await filehandle?.close();
}
