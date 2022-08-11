import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, fString:string, prop:string ): any {
  if (value.length === 0 || fString ==='') {
    return value;
  }
  const tempArry = [];
  for ( let item of value) {
    if (item[prop] === fString) {
    tempArry.push(item);  
    }
  }
  return tempArry;

  }
}
