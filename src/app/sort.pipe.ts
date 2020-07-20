import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], field: string, reverse: boolean): any[] {
    if (!value) return [];

    if (field) value.sort((a, b) => a[field] > b[field] ? 1 : -1);
    //else value.sort((a, b) => a > b ? 1 : -1);
    if (reverse) value.reverse();

    return value;
  }

}
