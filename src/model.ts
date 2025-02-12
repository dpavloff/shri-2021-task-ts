export type ColorTypes = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
export type EffectTypes = 'bright' | 'dim' | 'italic' | 'underscore' | 'blink';
export type BlackWhiteTypes = 'black' | 'white';

export const Reset = '\x1b[0m';
export const effects : Record <EffectTypes, string> = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};

export const fontColors : Record <ColorTypes, string> = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};

export const backgroundColors : Record <ColorTypes, string> = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};

export const contrast : Record <ColorTypes, BlackWhiteTypes> = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};

export interface IColorOptions {
    font?: ColorTypes,
    background?: ColorTypes,
    effects?: EffectTypes[]
}

export interface IMDOptions {
    bold?: boolean,
    italic?: boolean,
    mono?: boolean,
    link?: string
}
