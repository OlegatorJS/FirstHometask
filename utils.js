const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateHash(length) {
    let result = "";
    Array.from({ length: length }).forEach(() => {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    });
    return result;
}

module.exports = { generateHash };