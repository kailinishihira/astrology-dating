import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'horoscopePipe',
  pure: false
})

export class HoroscopeSignPipe implements PipeTransform {
  transform(input: User[], desiredSign){
    let output: User[] = [];
    if (desiredSign === "aries"){
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "aries"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "leo"){
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "leo"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "sagittarius") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "sagittarius"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "taurus") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "taurus"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "virgo") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "virgo"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "capricon") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "capricon"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "gemini") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "gemini"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "libra") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "libra"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "aquarius") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "aquarius"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "cancer") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "cancer"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "scorpio") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "scorpio"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "pisces") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign === "pisces"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
