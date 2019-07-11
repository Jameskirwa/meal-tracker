import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal';

@Pipe({
  name: 'caloriesLevel',
  pure: false
})
export class CaloriesLevelPipe implements PipeTransform {

  transform(input: Meal[], desiredCaloriesLevel) {
    var output: Meal[] = [];
    if(desiredCaloriesLevel === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >420) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCaloriesLevel === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}