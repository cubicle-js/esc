export type EscapeConfig = {
  quoteChar: string,
  pattern: RegExp;
  replacements: Record<string, string>;
  isEscapedPattern: (char: any) => RegExp
};