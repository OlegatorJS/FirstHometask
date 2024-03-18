import fs from 'fs';
import { formatMessage } from '../utils/utils.js';
import { LOG_FILE_PATH, ERROR_LOG_FILE_PATH } from '../exampleEnv.js';
import { level as scoreLevel } from '../constants.js';

function appendCallback(err) {
    if (err) {
        console.log(err);
    }
}

function log(
    date,
    level,
    category,
    message
) {
    const text = formatMessage(date, level, category, message, true);
    fs.appendFile(LOG_FILE_PATH, text, appendCallback);
    if (level === scoreLevel.ERROR) {
        fs.appendFile(ERROR_LOG_FILE_PATH, text, appendCallback);
    }
}

export default { log };
