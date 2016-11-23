import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'timestamp'})
export class TimestampPipe implements PipeTransform {

  padLeft(num, paddingValue) {
	  return String(paddingValue + num).slice(-paddingValue.length);
  }
  transform(value: number): string {
    //from the stored time to 23:55:00
    let hours = value / 3600  // needs to be an integer division
    let leaves = value - hours * 3600
    let minutes = leaves / 60
    let seconds = leaves - 60 * minutes

    return `${this.padLeft(hours,'00')}:${this.padLeft(minutes,'00')}:${this.padLeft(seconds,'00')}`
  }
}