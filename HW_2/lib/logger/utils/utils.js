function formatMessage(
    date,
    level,
    category,
    message,
    isNewRow
) {
    return `
        Date: ${date}, 
        category: ${category}, 
        level: ${level}, 
        message: ${JSON.stringify(message)}${isNewRow ? '\n' : ''}
    `;
}

export {formatMessage};
