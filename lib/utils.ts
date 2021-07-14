import _ from 'lodash';

export const clipUntilNewLine = (content: string) => {
    const regexUntilNewLine = /.*\n/;
    const [contentUntilFirstNewline] = content.match(regexUntilNewLine) || [''];

    return contentUntilFirstNewline;
}

export const sanitize = (str: string) => {
    const result = _.chain(str)
        .toLower()
        .deburr()
        .replace(/ /g, '-')
        .replace(/!/g, '')
        .replace(/:/g, '')
        .replace(/,/g, '')
        .replace(/\./g, '')
        .replace(/\?/g, '')
        .value();

    return result;
};
