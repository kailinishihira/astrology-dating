import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'element',
  pure: false
})

export class ElementPipe implements PipeTransform {

  transform(input: User[], sign) {
    let output: User[] = [];
    if(sign === "aries" || sign === "leo" || sign === "sagittarius" ){
      for(let i=0; i<input.length;i++){
        if(input[i].sign.toLowerCase() === "aries" || input[i].sign.toLowerCase() === "leo" || input[i].sign.toLowerCase() === "sagittarius"){
          output.push(input[i]);
        }
      }
      return output;
    } else if(sign === "taurus" || sign === "virgo" || sign === "capricorn" ){
      for(let i=0; i<input.length;i++){
        if(input[i].sign.toLowerCase() === "taurus" || input[i].sign.toLowerCase() === "virgo" || input[i].sign.toLowerCase() === "capricorn"){
          output.push(input[i]);
        }
      }
      return output;
    } else if(sign === "gemini" || sign === "libra" || sign === "aquarius" ){
      for(let i=0; i<input.length;i++){
        if(input[i].sign.toLowerCase() === "gemini" || input[i].sign.toLowerCase() === "libra" || input[i].sign.toLowerCase() === "aquarius"){
          output.push(input[i]);
        }
      }
      return output;
    } else if(sign === "cancer" || sign === "scorpio" || sign === "pisces" ){
      for(let i=0; i<input.length;i++){
        if(input[i].sign.toLowerCase() === "cancer" || input[i].sign.toLowerCase() === "scorpio" || input[i].sign.toLowerCase() === "pisces"){
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
