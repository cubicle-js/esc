import type { EscapeConfig } from './types/index.d.ts';

export const config = {

  id: {
    quoteChar: `"`,
    pattern: /['"`]/g,
    replacements: {
      "'": "''",       // Single quote
      '"': '""',       // Double quote
      "`": "``",        // Backtick
    },
    isEscapedPattern: (char: any) => {
      return new RegExp(`(?<!${char})${char}(?!${char})`)
    }
  } as EscapeConfig,

  sql: {
    quoteChar: `'`,
    pattern: /['"`]/g,
    replacements: {
      "'": "''",       // Single quote
      '"': '""',       // Double quote
      "`": "``",        // Backtick
    },
    isEscapedPattern: (char: any) => {
      return new RegExp(`(?<!${char})${char}(?!${char})`)
    }
  } as EscapeConfig,

  chars: {
    quoteChar: `"`,
    pattern: /['"\\`%_\0]/g,
    replacements: {
      "'": "\\'",      // Single quote
      '"': '\\"',      // Double quote
      "\\": "\\\\",    // Backslash
      "`": "\\`",      // Backtick
      "\0": "\\0",     // Null byte
      "%": "\\%",      // Percent sign
      "_": "\\_",       // Underscore
    },
    isEscapedPattern: (char: any) => {
      return new RegExp(`(?<!\\\\)${char.replace(/([.*+?^${}()|[\]\\])/g, '\\$1')}`)
    }
  } as EscapeConfig,
  
};