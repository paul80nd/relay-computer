import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bin' })
export class BinPipe implements PipeTransform {
  transform(value: number, length: string): string {
    const len = parseInt(length) * 4;
    let bin = value && value.toString(2) || '0';
    while (bin.length < len) {
      bin = '0' + bin;
    }
    return bin;
  }
}
