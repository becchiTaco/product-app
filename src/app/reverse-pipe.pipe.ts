import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(value: string): string {
    let reversedString = value.split('').reverse().join(''); //Se genera una variable que se va a igualar al valor dado en el HTML, se separa con split, se invierte con reverse y se vuelve a unir con join.
    return reversedString;
  }

}
