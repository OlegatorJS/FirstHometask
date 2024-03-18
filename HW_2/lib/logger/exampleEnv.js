import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: './example.env' });

const LOG_CONFIG_FILE = process.env['LOG_CONFIG_FILE'];
let fileData = {};

if (LOG_CONFIG_FILE) {
    try {
        const data = fs.readFileSync(LOG_CONFIG_FILE, {
            encoding: 'utf8',
            flag: 'r',
        });
        fileData = JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
}

let LOG_LEVEL = process.env['LOG_LEVEL'] || fileData.logLevel;
let LOG_APPENDER = process.env['LOG_APPENDER'] || fileData.appender;
const LOG_FILE_PATH = process.env['LOG_FILE_PATH'] || 'default_log.txt';
const ERROR_LOG_FILE_PATH = process.env['ERROR_LOG_FILE_PATH'] || 'default_error_logs.txt';

if (typeof LOG_LEVEL === 'string') {
    LOG_LEVEL = LOG_LEVEL.toUpperCase();
}
if (typeof LOG_APPENDER === 'string') {
    LOG_APPENDER = LOG_APPENDER.toUpperCase();
}

export { LOG_LEVEL, LOG_APPENDER, LOG_FILE_PATH, ERROR_LOG_FILE_PATH };
