import { Internals } from './internals.ts';
import { config } from '../config.ts';

export class Escape {
  static sql (value: string): string {
    return Internals.escape(value, config.sql);
  }

  static id (value: string): string { 
    return Internals.escape(value, config.id);
  }

  static chars (value: string): string {
    return Internals.escape(value, config.chars);
  }  
}