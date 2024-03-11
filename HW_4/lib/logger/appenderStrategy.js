import * as constants from './constants.js';
import config from './config.js';
import consoleAppender from './appenders/console.js';
import fileAppender from './appenders/file.js';

const appenderSet = {
    [constants.appender.CONSOLE]: consoleAppender,
    [constants.appender.FILE]: fileAppender,
    [undefined]: consoleAppender,
};
function initAppenders(eventEmitter, EVENT_NAME, formatter) {
    const appenderList = [];
    for (const iterator of config.appender) {
        appenderSet[iterator].create(eventEmitter, EVENT_NAME, formatter);
    }
    return appenderList;
}

export { initAppenders };
