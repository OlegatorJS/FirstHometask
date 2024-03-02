import fs from 'fs';
import { LOG_FILE_PATH, ERROR_LOG_FILE_PATH } from '../exampleEnv.js';
import { level as levelRank } from '../constants.js';

function appendCallback(err) {
    if (err) {
        console.log(err);
    }
}

async function log(message, level) {
    try {
        fs.promises.appendFile(LOG_FILE_PATH, message);
        if (level === levelRank.ERROR) {
            fs.promises.appendFile(ERROR_LOG_FILE_PATH, message);
        }
    } catch (err) {
        console.log(err);
    }
    fs.promises.appendFile(LOG_FILE_PATH, message, appendCallback);

    return;
}

export default { log };
