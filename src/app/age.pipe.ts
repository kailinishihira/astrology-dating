import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'agePipe',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: User[], desiredAge){
    let output: User[] = [];
    if (desiredAge === "25-30"){
      for(let i = 0; i < input.length; i++){
        if(input[i].age >= 25 || input[i].age <= 30){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "30-35"){
      for(let i = 0; i < input.length; i++){
        if(input[i].age >= 30 || input[i].age <= 35){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "35-40") {
      for(let i = 0; i < input.length; i++){
        if(input[i].age >= 35 || input[i].age <= 40){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "40-45") {
      for(let i = 0; i < input.length; i++){
        if(input[i].age >= 40 || input[i].age <= 45){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "45-50") {
      for(let i = 0; i < input.length; i++){
        if(input[i].age >= 45 || input[i].age <= 50){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
