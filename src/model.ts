const Reset = '\x1b[0m';

type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';

type ColorOptions = {
    font: Color;
    background: Color;
    effects: string[];
};

const isColorOptions = (arg: any): arg is ColorOptions => {
    if (
        (arg as ColorOptions).font !== undefined ||
        (arg as ColorOptions).effects !== undefined ||
        (arg as ColorOptions).background !== undefined
    )
        return true;
    else return false;
}

type MarkdownOptions = {
    bold: string;
    italic: string;
    mono: string;
    link: string;
};

const isMarkdownOptions = (arg: any): arg is MarkdownOptions => {
    if (
        (arg as MarkdownOptions).bold !== undefined ||
        (arg as MarkdownOptions).italic !== undefined ||
        (arg as MarkdownOptions).mono !== undefined ||
        (arg as MarkdownOptions).link !== undefined 
    ) return true;
    else return false;
}

const effects: Record<string, string> = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};

const fontColors: Record<Color, string> = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};

const backgroundColors: Record<Color, string> = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};

const contrast: Record<Color, string> = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};

export { Reset, effects, fontColors, backgroundColors, contrast, Color, ColorOptions, MarkdownOptions, isColorOptions, isMarkdownOptions };
