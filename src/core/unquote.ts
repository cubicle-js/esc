import { Internals } from './internals.ts';
import { config } from '../config.ts';

export class Unquote {
  static sql (value: string): string {
    return Internals.unquote(value, config.sql);
  }

  static id (value: string): string { 
    return Internals.unquote(value, config.id);
  }

  static chars (value: string): string {
    return Internals.unquote(value, config.chars);
  }  
}