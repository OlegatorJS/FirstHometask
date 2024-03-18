import fs from 'fs';
import stream from 'node:stream';
import { LOG_FILE_PATH, ERROR_LOG_FILE_PATH } from '../exampleEnv.js';
import { level as levelRank } from '../constants.js';
import process from 'node:process';

const logFile = fs.createWriteStream(
    LOG_FILE_PATH.split('.').join(`-${Date.now()}.`)
);
const errorFile = fs.createWriteStream(
    ERROR_LOG_FILE_PATH.split('.').join(`-${Date.now()}.`)
);
const readable = new stream.Readable({
    objectMode: true,
    read(size) {
        console.log(size);
    },
});

process.on('beforeExit', () => {
    readable.destroy();
    logFile.destroy();
    errorFile.destroy();
});

const create = (event, eventName, transformer) => {
    event.on(eventName, async (date, level, category, message) => {
        console.log('Appender file');
        const options = { objectMode: true };
        readable.push({ date, level, category, message });
        try {
            await readable.pipe(transformer).pipe(logFile);
            if (level === levelRank.ERROR) {
                console.log('PIPE TO ERROR');
                await readable.pipe(transformer).pipe(errorFile);
            }
            readable.push(null);
        } catch (err) {
            console.log(err);
        }
    });
};

export default { create };
