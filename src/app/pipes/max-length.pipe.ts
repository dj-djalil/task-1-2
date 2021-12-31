import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    const  [maxlength] = args;
     return value.slice(0,maxlength)+" ...";
  }

}
