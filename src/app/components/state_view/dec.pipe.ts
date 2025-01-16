import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dec',
    standalone: true
})
export class DecPipe implements PipeTransform {
  transform(value: number, length: string, neg: boolean): string {
    const len = parseInt(length);
    const msb = Math.pow(2, (len * 4) - 1);
    if (!value) { value = 0; }
    if (neg && (value & msb) === msb) {
      const mask = Math.pow(2, (len * 4)) - 1;
      const negValue = (~value & mask) + 1;
      return `-${negValue}`
    } else {
      return `${value}`;
    }
  }
}
