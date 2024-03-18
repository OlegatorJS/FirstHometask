import { LOG_DELIMETTER } from '../exampleEnv.js';
function formatMessage(date, level, category, message, newRow = true) {
    return `Date: ${date}, category:${category}, level:${level}, message:${Object.values(message)
        ?.map((el) => JSON.stringify(el))
        ?.join(LOG_DELIMETTER)}${newRow ? '\n' : ''}`;
}

export default { formatMessage };
