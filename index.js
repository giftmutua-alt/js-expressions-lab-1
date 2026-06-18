let day1 = 32;   // °F
let day2 = 25;   // °C
let day3 = 70;   // °F
let day4 = 18;   // °C
let day5 = 80;   // °F
let day6 = 15;   // °C
let day7 = 72;   // °F
let day8 = 28;   // °C
let day9 = 68;   // °F
let day10 = 20;  // °C
let day11 = 75;  // °F
let day12 = 23;  // °C
let day13 = 82;  // °F
let day14 = 30;  // °C
let day15 = 65;  // °F
let day16 = 22;  // °C
let day17 = 77;  // °F
let day18 = 26;  // °C
let day19 = 78;  // °F
let day20 = 24;  // °C
let day21 = 73;  // °F
let day22 = 21;  // °C
let day23 = 79;  // °F
let day24 = 27;  // °C
let day25 = 71;  // °F
let day26 = 19;  // °C
let day27 = 74;  // °F
let day28 = 17;  // °C
let day29 = 76;  // °F
let day30 = 29;  // °C


let day1_c = (day1 - 32) * 5 / 9;
let day2_c = day2;
let day3_c = (day3 - 32) * 5 / 9;
let day4_c = day4;
let day5_c = (day5 - 32) * 5 / 9;
let day6_c = day6;
let day7_c = (day7 - 32) * 5 / 9;
let day8_c = day8;
let day9_c = (day9 - 32) * 5 / 9;
let day10_c = day10;
let day11_c = (day11 - 32) * 5 / 9;
let day12_c = day12;
let day13_c = (day13 - 32) * 5 / 9;
let day14_c = day14;
let day15_c = (day15 - 32) * 5 / 9;
let day16_c = day16;
let day17_c = (day17 - 32) * 5 / 9;
let day18_c = day18;
let day19_c = (day19 - 32) * 5 / 9;
let day20_c = day20;
let day21_c = (day21 - 32) * 5 / 9;
let day22_c = day22;
let day23_c = (day23 - 32) * 5 / 9;
let day24_c = day24;
let day25_c = (day25 - 32) * 5 / 9;
let day26_c = day26;
let day27_c = (day27 - 32) * 5 / 9;
let day28_c = day28;
let day29_c = (day29 - 32) * 5 / 9;
let day30_c = day30;

let tot_temperature_in_celsius =
  day1_c + day2_c + day3_c + day4_c + day5_c +
  day6_c + day7_c + day8_c + day9_c + day10_c +
  day11_c + day12_c + day13_c + day14_c + day15_c +
  day16_c + day17_c + day18_c + day19_c + day20_c +
  day21_c + day22_c + day23_c + day24_c + day25_c +
  day26_c + day27_c + day28_c + day29_c + day30_c;


let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;


let tot_temperature_in_fahrenheit =
  (tot_temperature_in_celsius * 9 / 5) + 32;

let avg_temperature_in_fahrenheit =
  (avg_temperature_in_celsius * 9 / 5) + 32;


console.log("Total Temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius);
console.log("Total Temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit);