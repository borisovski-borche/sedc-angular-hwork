import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbriviate',
})
export class AbbriviatePipe implements PipeTransform {
  transform(value: string): string {
    const transformedString = value
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('');

    return transformedString;
  }
}
