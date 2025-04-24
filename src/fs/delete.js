import { unlink, access } from 'fs/promises';
import path from 'path';
const remove = async () => {
    const filePath = path.join(__dirname, 'fileToRemove.txt');

    try {
        await access(filePath);
        await unlink(filePath);
        console.log('File removed successfully!');
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await remove();