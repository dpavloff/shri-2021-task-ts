import { color } from './colors';
import { markdown } from './md';

import { ColorOptions, MarkdownOptions, isColorOptions, isMarkdownOptions } from './model';

export function style(text : string, options: Partial<ColorOptions> | Partial<MarkdownOptions>) {
    if (text.length === 0) {
        return text;
    }
    if (isColorOptions(options)) {
        return color(text, options);
    }
    if (isMarkdownOptions(options)) {
        return markdown(text, options);
    }
    return text;
}
