import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'horoscopeSign',
  pure: false
})

export class HoroscopeSignPipe implements PipeTransform {
  transform(input: User[], desiredSign){
    let output: User[] = [];
    if (desiredSign === "aries"){
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "aries"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "leo"){
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "leo"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "sagittarius") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "sagittarius"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "taurus") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "taurus"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "virgo") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "virgo"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "capricon") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "capricon"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "gemini") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "gemini"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "libra") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "libra"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "aquarius") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "aquarius"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "cancer") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "cancer"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "scorpio") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "scorpio"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSign === "pisces") {
      for(let i = 0; i < input.length; i++){
        if(input[i].sign.toLowerCase() === "pisces"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
