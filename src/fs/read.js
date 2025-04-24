import { readFile, access } from 'fs/promises';
import path from 'path';
const read = async () => {
    const filePath = path.join(__dirname, 'fileToRead.txt');

    try {
        await access(filePath);
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await read();