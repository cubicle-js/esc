import { Internals } from './internals.ts';
import { config } from '../config.ts';

export class Quote {
  static sql (value: string): string {
    return Internals.quote(value, config.sql);
  }

  static id (value: string): string { 
    return Internals.quote(value, config.id);
  }

  static chars (value: string): string {
    return Internals.quote(value, config.chars);
  }  
}