module.exports = function reverse(n) {
    let str = '' + n;
    if (str[0] === '-') {
        str = str.slice(1, str.length);
    }
    return str.split('').reverse().join('');
}
