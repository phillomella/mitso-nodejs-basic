import { createReadStream } from 'fs';
import path from 'path';
const read = async () => {
    const filePath = path.join(process.cwd(), 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath, 'utf-8');

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (err) => {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    });
};

await read();