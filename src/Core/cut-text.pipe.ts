import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, num: number): unknown {
    return value.split(" ").slice(0,num).join(" ");
  }

}
