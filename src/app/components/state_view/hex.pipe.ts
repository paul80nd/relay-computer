import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hex',
    standalone: true
})
export class HexPipe implements PipeTransform {
  transform(value: number, length: string): string {
    const len = parseInt(length);
    let hex = value && value.toString(16) || '0';
    while (hex.length < len) {
      hex = '0' + hex;
    }
    return hex.toUpperCase();
  }
}
