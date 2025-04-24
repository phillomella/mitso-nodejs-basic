import { rename as fsRename, access } from 'fs/promises';
import path from 'path';

const rename = async () => {
    const oldFilePath = path.join(__dirname, 'wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'properFilename.md');

    try {
    
        await access(oldFilePath);
        try {
            await access(newFilePath);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                await fsRename(oldFilePath, newFilePath);
                console.log('File renamed successfully!');
            } else {
                throw err;
            }
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await rename();