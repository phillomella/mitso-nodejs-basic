import { readdir, access } from 'fs/promises';
import path from 'path';
const list = async () => {
    const folderPath = path.join(__dirname, 'files');

    try {
        await access(folderPath);
        const files = await readdir(folderPath);
        console.log(files);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await list();