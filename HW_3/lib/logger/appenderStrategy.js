import * as constants from './constants.js';
import config from './config.js';
import consoleAppender from './appenders/console.js';
import fileAppender from './appenders/file.js';

const appenderSet = {
    [constants.appender.CONSOLE]: consoleAppender,
    [constants.appender.FILE]: fileAppender,
    [undefined]: consoleAppender,
};
function getAppenderList() {
    const appenderList = [];
    for (const iterator of config.appender) {
        appenderList.push(appenderSet[iterator]);
    }
    return appenderList;
}

export { getAppenderList };
