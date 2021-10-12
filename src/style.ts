import { color } from './colors';
import { markdown } from './md';

import { ColorOptions, MarkdownOptions } from './model';

export function style(text : string, options: Partial<ColorOptions> | Partial<MarkdownOptions>) {
    if (text.length === 0) {
        return text;
    }
    if (options instanceof ColorOptions) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
