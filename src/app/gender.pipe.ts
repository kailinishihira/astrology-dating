import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'genderPipe',
  pure: false
})

export class GenderPipe implements PipeTransform {
  transform(input: User[], desiredGender){
    let output: User[] = [];
    if (desiredGender === "male"){
      for(let i = 0; i < input.length; i++){
        if(input[i].interestedIn == "male"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGender === "female"){
      for(let i = 0; i < input.length; i++){
        if(input[i].interestedIn == "female"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGender === "both") {
      for(let i = 0; i < input.length; i++){
        if(input[i].interestedIn == "both"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
