import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'days'})
export class DaysPipe implements PipeTransform {
  transform(value: [string]): string {
      let a = value.map(s => s.substr(0,3));
      return a.join(", ");
  }
}