import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dec' })
export class DecPipe implements PipeTransform {
  transform(value: number, length: string): string {
    const len = parseInt(length);
    const msb = Math.pow(2, (len * 4) - 1);
    if (!value) { value = 0; }
    if ((value & msb) === msb) {
      const mask = Math.pow(2, (len * 4)) - 1;
      const neg = (~value & mask) + 1;
      return `${value} (-${neg})`
    } else {
      return `${value}`;
    }
  }
}
