import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(id: number) {
    let codigo: string
    codigo = 'ref-' + id
    return codigo;
  }

}
