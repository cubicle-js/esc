import type { EscapeConfig } from '../types/index.d.ts';

export class Internals {
  static escape (value: string, config: EscapeConfig): string {
    if (Internals.isEscaped(value, config)) {
      return value;
    }

    return value.replace(
      config.pattern, 
      char => config.replacements[char]
    );
  }

  static isEscaped (value: string, config: EscapeConfig): boolean {
    const patterns = Object.keys(config.replacements).map(
      config.isEscapedPattern
    ) as RegExp[];
    return !patterns.some(pattern => pattern.test(value));
  }

  static isQuoted (value: string, config: EscapeConfig): boolean {
    return value.startsWith(config.quoteChar) 
      && value.endsWith(config.quoteChar);
  }

  static quote (value: string, config: EscapeConfig) : string {
    const escapedValue = Internals.escape(value, config);
    
    if (Internals.isQuoted(escapedValue, config)) {
      return escapedValue;
    }

    return `${config.quoteChar}${escapedValue}${config.quoteChar}`;
  }
  
  static unquote (value: string, config: EscapeConfig) : string {
    const length = config.quoteChar.length;
    return Internals.isQuoted(value, config) ? value.slice(length, -length) : value;
  }
}