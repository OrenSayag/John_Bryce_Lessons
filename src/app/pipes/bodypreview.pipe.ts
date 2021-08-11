import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bodypreview'
})
export class BodypreviewPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    return value.substr(0, args[0]) + "...";
  }

}
