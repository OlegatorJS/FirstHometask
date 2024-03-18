import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: './example.env' });

const LOG_CONFIG_FILE = process.env['LOG_CONFIG_FILE'];
let fileData = {};

if (LOG_CONFIG_FILE) {
    try {
        const data = fs.readFileSync(path.join(LOG_CONFIG_FILE), {
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
let LOG_FORMATTER = process.env['LOG_FORMATTER'] || fileData.formatter || 'DEFAULT';
let LOG_DELIMETTER = process.env['LOG_DELIMETTER'] || fileData.delimetter || ',';
const LOG_FILE_PATH = process.env['LOG_FILE_PATH'] || 'logs.txt';
const ERROR_LOG_FILE_PATH = process.env['ERROR_LOG_FILE_PATH'] || 'error-logs.txt';

if (typeof LOG_LEVEL === 'string') {
    LOG_LEVEL = LOG_LEVEL.toUpperCase();
}
if (typeof LOG_APPENDER === 'string') {
    LOG_APPENDER = LOG_APPENDER.toUpperCase().split(',');
}
if (typeof LOG_FORMATTER === 'string') {
    LOG_FORMATTER = LOG_FORMATTER.toUpperCase();
}

export {
    LOG_LEVEL,
    LOG_APPENDER,
    LOG_FILE_PATH,
    ERROR_LOG_FILE_PATH,
    LOG_FORMATTER,
    LOG_DELIMETTER,
};
